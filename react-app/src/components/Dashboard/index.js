import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RoundCard from './RoundCard';
import { getDashboardRounds } from '../../store/rounds';
import './Dashboard.css'

const Dashboard = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session?.user)
  const dashRounds = useSelector(state => state.rounds?.dashRounds)

  useEffect(() => {
    if (sessionUser) {
      dispatch(getDashboardRounds(sessionUser.id))
    }
  },[dispatch, sessionUser])

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
              <h3>User Card</h3>
            </div>
            <div className="dash-card handicap-card">
              <h3>Handicap Card</h3>
            </div>
            <div className="dash-card scores-card">
              <h3>Scores Card</h3>
            </div>
          </div>
        </div>        
      </div>
    </div>

  )
}

export default Dashboard