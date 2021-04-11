import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getDashboardRounds } from '../../store/rounds';
import { 
  ComposedChart,
  BarChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LabelList
} from 'recharts';
import './Stats.css';

const Stats = () => {
  const dispatch = useDispatch();
  const [chartTitle, setChartTitle] = useState('Scores per Round')
  const [chartData, setChartData] = useState([])
  const [chartType, setChartType] = useState("scoring")
  const [chartDisp, setChartDisp] = useState(null)
  const sessionUser = useSelector(state => state.session?.user)
  const dashRounds = useSelector(state => state.rounds?.dashRounds)

  useEffect(() => {
    if (sessionUser) {
      dispatch(getDashboardRounds(sessionUser.id))
    }
  }, [dispatch, sessionUser])

  console.log('heres the data ', dashRounds)
  useEffect(() => {
    if (dashRounds?.length) {
      let data = [];
      let runningScore = 0;
      let runningHandicap = 0;
      let runningFir = 0;
      let runningGir = 0;
      let runningPutts = 0;

      const startNum = Math.min(19, dashRounds.length - 1)
      for (let i = startNum; i >= 0; i--) {
        const thisRound = dashRounds[i]
        //format the date
        const wackDate = new Date(thisRound.roundDate);
        const fDate = wackDate.toDateString();
        const fArr = fDate.split(' ')
        const formattedDate = `${fArr[1]}, ${fArr[2]} ${fArr[3]}`
        console.log('dates: string, formateed: ', fDate, formattedDate)
        // score calcs
        const score = thisRound.round_data.total_score
        runningScore += score
        const avgScore = Math.round((runningScore / ((startNum + 1) - i)) * 100) / 100
        // handicap calcs
        const handicap = Math.round(10 * ((parseInt(thisRound.round_data.total_score) - parseInt(thisRound.rating)) * 113 / parseInt(thisRound.slope))) / 10
        runningHandicap += handicap
        const avgHc = Math.round((runningHandicap / ((startNum + 1) - i)) * 100) / 100
        // putting calcs
        const totalPutts = thisRound.round_data.total_putts
        runningPutts += totalPutts
        const avgPutts = Math.round((runningPutts / ((startNum + 1) - i)) * 100) / 100
        const putts1 = thisRound.round_data.one_putts
        const putts2 = thisRound.round_data.two_putts * 2
        const putts3 = thisRound.round_data.three_putts * 3
        const puttsOther = totalPutts - (putts1 + putts2 + putts3)
        // gir calcs
        const gir = thisRound.round_data.gir
        runningGir += gir
        const avgGir = Math.round((runningGir / ((startNum + 1) - i)) * 100) / 100
        // fir calcs
        const fir = (thisRound.round_data.fir) * 100
        runningFir += fir
        const avgFir = Math.round((runningFir / ((startNum + 1) - i)) * 100) / 100

        const newSet = {
          name: ((startNum + 1) - i) + '- ' + formattedDate,
          avgScore,
          score,
          handicap,
          avgHc,
          fir: Math.round(10 * fir) / 10,
          avgFir,
          gir,
          avgGir,
          "1-putts": putts1,
          "2-putts": putts2,
          "3-putts": putts3,
          "other putts": puttsOther,
          totalPutts,
          avgPutts
        }
        data.push(newSet);
      }
      setChartData(data)
    }
  },[dashRounds])

  console.log('chart data: ', chartData)

  const CustomizedAxisTick = (props) => {
    const { x, y, payload } = props;

    return (
      <g transform={`translate(${x},${y})`}>
        <text
          x={0}
          y={0}
          dy={0}
          textAnchor="end"
          fill="#666"
          transform="rotate(-90)"
          fontSize={12}
        >
          {payload.value}
        </text>
      </g>
    );
  };

  //Stats click handlers
  const handleHandicapClick = () => {
    setChartTitle('Handicap Summary')
    setChartType('hc')
  }

  const handleScoringClick = () => {
    setChartTitle('Scores per Round')
    setChartType('scoring')
  }

  const handlePuttsClick = () => {
    setChartTitle('Putts per Round')
    setChartType('putts')
  }

  const handleGirClick = () => {
    setChartTitle('GIR (Greens in regulation) per round (#)')
    setChartType('gir')
  }

  const handleFirClick = () => {
    setChartTitle('Fairway Accuracy by Round (%)')
    setChartType('fir')
  }

  // Charts
  useEffect(() => {
    if (chartType === "scoring") {
      const disp = chartData?.length && (
        <ComposedChart
          width={1100}
          height={400}
          data={chartData}
          margin={{
            top: 20,
            right: 80,
            bottom: 20,
            left: 20
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis
            dataKey="name"
            scale="band"
            tick={CustomizedAxisTick}
          />
          <YAxis
            domain={[60, 110]}
          />
          <Tooltip />
          <Bar
            dataKey="score"
            barSize={30}
            fill="#263D51"
            label={{ value: "score", position: "top" }} />
          <Line type="monotone" dataKey="avgScore" stroke="#A7CF3F" strokeWidth={4} />
        </ComposedChart>
      )
      setChartDisp(disp)
    } else if (chartType === "hc") {
      const disp = chartData?.length && (
        <ComposedChart
          width={1100}
          height={400}
          data={chartData}
          margin={{
            top: 20,
            right: 80,
            bottom: 20,
            left: 20
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis
            dataKey="name"
            scale="band"
            tick={CustomizedAxisTick}
          />
          <YAxis
            domain={[-5, 30]}
          />
          <Tooltip />
          <Bar
            dataKey="handicap"
            barSize={30}
            fill="#263D51"
            label={{ value: "handicap", position: "top" }} />
          <Line type="monotone" dataKey="avgHc" stroke="#A7CF3F" strokeWidth={4} />
        </ComposedChart>
      )
      setChartDisp(disp)
    } else if (chartType === "putts") {
      const disp = chartData?.length && (
        <BarChart
          width={1100}
          height={400}
          data={chartData}
          margin={{
            top: 20,
            right: 80,
            left: 20,
            bottom: 20
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            scale="band"
            tick={CustomizedAxisTick} />
          <YAxis domain={[0, 40]} />
          <Tooltip />
          <Legend />
          <Bar dataKey="1-putts" stackId="a" fill="#4B88Cb" barSize={30} />
          <Bar dataKey="2-putts" stackId="a" fill="#263D51" barSize={30} />
          <Bar dataKey="3-putts" stackId="a" fill="#A7CF3F" barSize={30} />
          <Bar dataKey="other putts" stackId="a" fill="#1C1C1C" barSize={30}>
            <LabelList dataKey="totalPutts" position="top" />
          </Bar>
        </BarChart>
      )
      setChartDisp(disp)
    } else if (chartType === "gir") {
      const disp = chartData?.length && (
        <ComposedChart
          width={1100}
          height={400}
          data={chartData}
          margin={{
            top: 20,
            right: 80,
            bottom: 20,
            left: 20
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis
            dataKey="name"
            scale="band"
            tick={CustomizedAxisTick}
          />
          <YAxis
            domain={[0, 18]}
          />
          <Tooltip />
          <Bar
            dataKey="gir"
            barSize={20}
            fill="#263D51"
            label={{ value: "gir", position: "top" }} />
          <Line type="monotone" dataKey="avgGir" stroke="#A7CF3F" strokeWidth={4} />
        </ComposedChart>
      )
      setChartDisp(disp)
    } else if (chartType === "fir") {
      const disp = chartData?.length && (
        <ComposedChart
          width={1100}
          height={400}
          data={chartData}
          margin={{
            top: 20,
            right: 80,
            bottom: 20,
            left: 20
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis
            dataKey="name"
            scale="band"
            tick={CustomizedAxisTick}
          />
          <YAxis
            domain={[0, 100]}
          />
          <Tooltip />
          <Bar
            dataKey="fir"
            barSize={30}
            fill="#263D51"
            label={{ value: "fir", position: "top" }} />
          <Line type="monotone" dataKey="avgFir" stroke="#A7CF3F" strokeWidth={4} />
        </ComposedChart>
      )
      setChartDisp(disp)
    } else {
      const disp = <div>No Data Avaliable</div>
      setChartDisp(disp)
    }

  },[chartType, dashRounds, chartData])

  return (
    <div className="stats-wrapper">
      <div className="stats-header">
        <h1 id="page-title">Stats</h1>

      </div>
      {dashRounds?.length ? (
        <div className="stats-body">
          <div className="stats-menu">
            <h1>Stats Graphs</h1>
            <p onClick={handleScoringClick}>Scoring</p>
            <p onClick={handleHandicapClick}>Handicap</p>
            <p onClick={handlePuttsClick}>Putts</p>
            <p onClick={handleGirClick}>Greens Hit</p>
            <p onClick={handleFirClick}>Driving Accuracy</p>
          </div>
          <div className="chart-wrapper">
            <h3>{chartTitle}</h3>
            <div className="chart-display">
              {chartDisp}
            </div>
            <div className="chart-bottom">
              empty
            </div>
          </div>
        </div>
      ) : (
        <h2 className="add-score-default">
          <NavLink to = '/add_score'>Add a score</NavLink> to start tracking your stats.
        </h2 >
      )}
    </div>
  )
}

export default Stats