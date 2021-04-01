import React from 'react';
import { useSelector } from 'react-redux';
import './Dashboard.css'

const Dashboard = () => {
  const sessionUser = useSelector(state => state.session?.user)

  return (
    <div className="full-dashboard">
      <h1>Welcome to the user dashboard</h1>
      <p>You are logged in as {sessionUser?.userName}</p>
    </div>

  )
}

export default Dashboard