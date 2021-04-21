import React from 'react';

const RoundInfo = ({ roundInfo }) => {

  const teeboxName = roundInfo.round.teebox.teeboxName
  const courseName = roundInfo.courseName
  //format the date
  const wackDate = new Date(roundInfo.round.roundDate);
  const fDate = wackDate.toDateString();
  const fArr = fDate.split(' ')
  const formattedDate = `${fArr[1]}, ${fArr[2]} ${fArr[3]}`

  return (
    <div className="select-course-wrapper">
      <h3>Round Info</h3>
      <div className="select-date">
        <p>Date:</p>
        <div className="score-name">{formattedDate}</div>
      </div>
      <div className="score-search">
        <p>Course:</p>
        <div className="score-name">{courseName}</div>
      </div>
      <div className="score-tee">
        <p>Tee:</p>
        <div className="score-name">{teeboxName}</div>
      </div>
    </div>
  )
}

export default RoundInfo;