import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
  const sessionUser = useSelector(state => state.session?.user)
  const dashRounds = useSelector(state => state.rounds?.dashRounds)

  useEffect(() => {
    if (sessionUser) {
      dispatch(getDashboardRounds(sessionUser.id))
    }
  }, [dispatch, sessionUser])

  // console.log('heres the data ' ,dashRounds)
  useEffect(() => {
    if (dashRounds) {
      let data = [];
      let runningScore = 0;
      for (let i = 0; i < 20; i++) {
        const score = dashRounds[i].round_data.total_score
        runningScore += score
        const average = Math.round((runningScore / (i + 1)) * 100) / 100
        const newSet = {
          name: dashRounds[i].roundDate,
          average,
          score
        }
        data.push(newSet);
      }
      setChartData(data)
    }
  },[dashRounds])

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
  }

  const handleScoringClick = () => {
    setChartTitle('Scores per Round')
  }

  const handlePuttsClick = () => {
    setChartTitle('Putts per Round')
  }

  const handleGirClick = () => {
    setChartTitle('GIR (Greens in regulation) per round')
  }

  const handleFirClick = () => {
    setChartTitle('Fairway Accuracy by Round')
  }

  return (
    <div className="stats-wrapper">
      <div className="stats-header">
        <h1>Welcome to the user stats page</h1>
        <p>You are logged in as {sessionUser?.userName}</p>

      </div>
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
            />
            <Tooltip />
            {/* <Legend /> */}
            <Bar dataKey="score" barSize={15} fill="#263D51" />
            <Line type="monotone" dataKey="average" stroke="#A7CF3F" lineSize={10} />
          </ComposedChart>
          <div className="chart-bottom">
            empty
          </div>
        </div>
      </div>
    </div>

  )
}

export default Stats