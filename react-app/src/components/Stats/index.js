import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getDashboardRounds } from '../../store/rounds';
import { 
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  // Legend 
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

  console.log('heres the data ' ,dashRounds)
  useEffect(() => {
    if (dashRounds?.length) {
      let data = [];
      let runningScore = 0;
      const startNum = Math.min(19, dashRounds.length - 1)
      for (let i = startNum; i >= 0; i--) {
        //format the date
        const wackDate = new Date(dashRounds[i].roundDate);
        const fDate = wackDate.toDateString();
        const fArr = fDate.split(' ')
        const formattedDate = `${fArr[1]}, ${fArr[2]} ${fArr[3]}`

        const score = dashRounds[i].round_data.total_score
        runningScore += score
        const average = Math.round((runningScore / ((startNum + 1) - i)) * 100) / 100
        const newSet = {
          name: ((startNum + 1) - i) + '- ' + formattedDate,
          average,
          score
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
    setChartTitle('GIR (Greens in regulation) per round')
    setChartType('gir')
  }

  const handleFirClick = () => {
    setChartTitle('Fairway Accuracy by Round')
    setChartType('fir')
  }

  // Charts
  useEffect(() => {
    if (chartType === "scoring") {
      const disp = chartData?.length && (
        <ComposedChart
          width={900}
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
            // label={{ value: "Pages", position: "insideBottomRight", offset: 0 }}
            scale="band"
            // tick={{width:10}}
            tick={CustomizedAxisTick}
          />
          <YAxis
            // label={{ value: "Index", angle: -90, position: "insideLeft" }}
            domain={[60, 110]}
          />
          <Tooltip />
          {/* <Legend /> */}
          <Bar
            dataKey="score"
            barSize={20}
            fill="#263D51"
            label={{ value: "score", position: "top" }} />
          <Line type="monotone" dataKey="average" stroke="#A7CF3F" strokeWidth={4} />
        </ComposedChart>
      )
      setChartDisp(disp)
    } else if (chartType === "hc") {
      const disp = <div>No Data Avaliable</div>
      setChartDisp(disp)
    } else if (chartType === "putts") {
      const disp = <div>No Data Avaliable</div>
      setChartDisp(disp)
    } else if (chartType === "gir") {
      const disp = <div>No Data Avaliable</div>
      setChartDisp(disp)
    } else if (chartType === "fir") {
      const disp = <div>No Data Avaliable</div>
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
            <p onClick={handleHandicapClick}>Handicap</p>
            <p onClick={handleScoringClick}>Scoring</p>
            <p onClick={handlePuttsClick}>Putts</p>
            <p onClick={handleGirClick}>GIR%</p>
            <p onClick={handleFirClick}>Driving%</p>
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