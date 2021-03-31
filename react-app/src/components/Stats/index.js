import React from 'react';
import { useSelector } from 'react-redux';

const Stats = () => {
  const sessionUser = useSelector(state => state.session?.user)

  return (
    <div className="full-stats">
      <h1>Welcome to the user stats page</h1>
      <p>You are logged in as {sessionUser?.userName}</p>
    </div>

  )
}

export default Stats