import React from 'react';

const RoundCard = ({ round }) => {

  return (
    <>
      <h3>Each round card</h3>
      <p>{round.roundDate}</p>
      <p>{round.courseName}</p>
      <p>{round.teebox}</p>
    </>
  )
}

export default RoundCard