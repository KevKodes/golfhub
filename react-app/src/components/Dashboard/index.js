import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RoundCard from './RoundCard';
import './Dashboard.css'

const Dashboard = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session?.user)
  const rounds = useSelector(state => state.rounds)

  useEffect(() => {
    if (sessionUser) {
      dispatch(getDashboardRounds(sessionUser.id))
    }
  },[dispatch, sessionUser])

  return (
    <div className="full-dashboard">
      <h1>Welcome to the user dashboard</h1>
      <p>You are logged in as {sessionUser?.userName}</p>
      <div className="rounds-wrapper">
        { rounds && rounds.map((round, idx) => (
          <RoundCard key={idx} round={round} />
        ))}
      </div>
    </div>

  )
}

export default Dashboard