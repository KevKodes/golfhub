import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { BarChart, Bar, XAxis } from 'recharts';
import RoundCard from './RoundCard';
import { getDashboardRounds } from '../../store/rounds';
import './Dashboard.css'

const Dashboard = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session?.user)
  const dashRounds = useSelector(state => state.rounds?.dashRounds)
  const [scorecardData, setScorecardData] = useState([])

  //get the rounds for the user
  useEffect(() => {
    if (sessionUser) {
      dispatch(getDashboardRounds(sessionUser.id))
    }
  },[dispatch, sessionUser])

  // set up the data for the scores card (last 5 scores)
  useEffect(() => {
    let data = []
    if (dashRounds) {
      for (let i = 0; i < 5; i++) {
        const eachRound = dashRounds[i]
        let newScoreObj = {
          name: eachRound.roundDate,
          score: eachRound.round_data.total_score
        }
        data.push(newScoreObj)
      }
    }
    setScorecardData(data)
  },[dashRounds])

  console.log(scorecardData)

  // get the milestones to pass to the round cards with the round data

  const milestones = [
    {
      title: "No 3 Putts",
      initial: "P"
    },
    {
      title: "Birdies",
      initial: 3
    }
  ]

  return (
    <div className="full-dashboard">
      <h1 id="dashboard-title">Activity Feed</h1>
      <div className="dash-body">
        <div className="dash-body-left">
          <div className="rounds-wrapper">
            { dashRounds && dashRounds.map((round, idx) => (
              <RoundCard key={idx} round={round} milestones={milestones}/>
            ))}
          </div>
        </div>
        <div className="dash-body-right">
          <div className="dash-cards-wrapper">
            <div className="dash-card user-card">
              <div className="scores-card-header">
                { sessionUser && (
                  <div className="user-card-info">
                    <h3>{sessionUser.userName}</h3>
                    <div>{sessionUser.location}</div>
                    <div>{sessionUser.homeCourse}</div>
                  </div>
                )}

              </div>
              <div className="style-strip">
                empty text
              </div>
            </div>
            <div className="dash-card handicap-card">
              <div className="scores-card-header">
                <h3>Handicap Card</h3>
                
              </div>
            </div>
            <div className="dash-card scores-card">
              <div className="scores-card-header">
                <h3>Recent Scores</h3>
                <NavLink to="/stats" exact={true} activeClassName="active">
                  <i className="far fa-chart-bar"></i>
                  <p>Stats</p>
                </NavLink>
              </div>
              <div className="style-strip">
                empty text
              </div>
              <div className="dash-chart-wrapper">
                <BarChart width={300} height={150} data={scorecardData}>
                  <XAxis tick={false} />
                  <Bar
                  dataKey="score"
                  fill="#A7CF3F"
                  barSize={30}
                  label={{ value: "score", position: "top" }} />
                </BarChart>

              </div>
            </div>
          </div>
        </div>        
      </div>
    </div>

  )
}

export default Dashboard