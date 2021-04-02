import React from 'react';
import { useSelector } from 'react-redux';
import { 
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend 
} from 'recharts';
import './Stats.css';

const Stats = () => {
  const sessionUser = useSelector(state => state.session?.user)

  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <div className="stats-wrapper">
      <div className="stats-header">
        <h1>Welcome to the user stats page</h1>
        <p>You are logged in as {sessionUser?.userName}</p>

      </div>
      <div className="stats-body">
        <div className="stats-menu">
          <h1>Stats Graphs</h1>
        </div>
        <div className="chart-wrapper">
          <ComposedChart
            width={500}
            height={400}
            data={data}
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
              label={{ value: "Pages", position: "insideBottomRight", offset: 0 }}
              scale="band"
            />
            <YAxis label={{ value: "Index", angle: -90, position: "insideLeft" }} />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" barSize={20} fill="#263D51" />
            <Line type="monotone" dataKey="uv" stroke="#A7CF3F" />
          </ComposedChart>
        </div>
      </div>
    </div>

  )
}

export default Stats