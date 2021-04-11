import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { BarChart, Bar, XAxis } from 'recharts';
import RoundCard from './RoundCard';
import { getDashboardRounds } from '../../store/rounds';
import logo from '../../assets/tee.jpeg';
import './Dashboard.css'

const Dashboard = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session?.user)
  const dashRounds = useSelector(state => state.rounds?.dashRounds)
  const [scorecardData, setScorecardData] = useState([])
  const [handicap, setHandicap] = useState('n/a')
  const [scoringAverage, setScoringAverage] = useState('n/a')

  //get the rounds for the user
  useEffect(() => {
    if (sessionUser) {
      dispatch(getDashboardRounds(sessionUser.id))
    }
  },[dispatch, sessionUser])

  // set up the data for the scores card (last 5 scores)
  // calculate the average score
  // calculate the handicap
  useEffect(() => {
    let data = []
    if (dashRounds?.length) {
      //last 5 scores or all the scores if less than 5
      for (let i = Math.min(4, dashRounds.length - 1) ; i >= 0; i--) {
        const eachRound = dashRounds[i]
        let newScoreObj = {
          name: eachRound.roundDate,
          score: eachRound.round_data.total_score
        }
        data.push(newScoreObj)
      }
      setScorecardData(data)

      //average score
      let allScores = []
      dashRounds.forEach(round => {
        allScores.push(round.round_data.total_score)
      });
      const avgScore = allScores.reduce((acc, cv) => acc + cv) / allScores.length
      setScoringAverage(Math.round(avgScore * 10) / 10)

      // handicap (need course ratings for this)
      let allHandicaps = []
      dashRounds.forEach(round => {
        const cap = (parseInt(round.round_data.total_score) - parseInt(round.rating)) * 113 / parseInt(round.slope)
        allHandicaps.push(cap)
      });
      // find the lowest 8 handicaps and take the avg
      allHandicaps = allHandicaps.sort((a, b) => b - a)
      if (allHandicaps.length < 8) {
        const avgHC = allHandicaps.reduce((acc, cv) => acc + cv) / allHandicaps.length
        setHandicap((Math.round(avgHC * 10) / 10).toFixed(1))
      } else {
        const lowHandicaps = allHandicaps.slice(0, 8)
        const avgHC = lowHandicaps.reduce((acc, cv) => acc + cv) / 8
        setHandicap((Math.round(avgHC * 10) / 10).toFixed(1))
      }
    }
  },[dashRounds])

  return (
    <div className="full-dashboard">
      <h1 id="dashboard-title">Activity Feed</h1>
      <div className="dash-body">
        <div className="dash-body-left">
          <div className="rounds-wrapper">
            { dashRounds?.length ? dashRounds.map((round, idx) => (
              <RoundCard key={idx} round={round}/>
            )) : (
              <h2>
                <NavLink to='/add_score'>Add a score</NavLink> to start tracking your stats.
              </h2>
            )}
          </div>
        </div>
        <div className="dash-body-right">
          <div className="dash-cards-wrapper">
            <div className="dash-card user-card">
              <div className="user-card-header">
                <div className="user-card-img">
                  <img src={logo} alt="golfhub logo" />
                </div>
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
              <div className="user-card-bottom">
                <div className="card-bot-section">
                  <p>handicap index</p>
                  <div className="bot-section-circle">
                    {handicap && (
                      <div>
                        {handicap}
                      </div>
                    )}
                  </div>
                </div>
                <div className="card-bot-section">
                  <p>average score</p>
                  <div className="bot-section-circle">
                    {scoringAverage && (
                      <div>
                        {scoringAverage}
                      </div>
                    )}
                  </div>
                </div>
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