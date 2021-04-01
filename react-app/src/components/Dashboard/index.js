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

  return (
    <div className="full-dashboard">
      <h1>Activity Feed</h1>
      <div className="dash-body">
        <div className="dash-body-left">
          <div className="rounds-wrapper">
            { dashRounds && dashRounds.map((round, idx) => (
              <RoundCard key={idx} round={round} />
            ))}
          </div>
        </div>
        <div className="dash-body-right">
          <p>side bar for additional cards</p>
          
        </div>        
      </div>
    </div>

  )
}

export default Dashboard