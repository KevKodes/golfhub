import React from 'react';
import { useSelector } from 'react-redux';

const AddScore = () => {
  const sessionUser = useSelector(state => state.session?.user)

  return (
    <div className="full-addscore">
      <h1>Hello {sessionUser?.userName}</h1>
      <p>This is where you'll input a round</p>
    </div>
  )
}

export default AddScore;