import React from 'react';
import { NavLink } from 'react-router-dom';

const RoundCard = ({ round, milestones }) => {
  const girPercent = Math.floor(round.round_data.gir * 100)
  const firPercent = Math.floor(round.round_data.fir * 100)

  //format the date
  const wackDate = new Date(round.roundDate);
  const fDate = wackDate.toDateString();
  const fArr = fDate.split(' ')
  const formattedDate = `${fArr[1]}, ${fArr[2]} ${fArr[3]}`

  return (
    <div className="inner-rounds-wrapper">
      <div className="inner-rounds-header">
        <NavLink to={`/course/${round.courseId}`}>
          {round.courseName}
        </NavLink>
        <p>{formattedDate} | {round.teebox} Tees</p>
      </div>
      <div className="inner-card">
        <p>ROUND STATS</p>
        <div className="round-stats">
          <div className="stats-section">
            <p>Score</p>
            <div className="stats-circle">
              {round.round_data.total_score}
            </div>
          </div>
          <div className="stats-section">
            <p>Putts</p>
            <div className="stats-circle">
              {round.round_data.total_putts}
            </div>
          </div>
          <div className="stats-section">
            <p>GIR%</p>
            <div className="stats-circle">
              {girPercent}
            </div>
          </div>
          <div className="stats-section">
            <p>FIR%</p>
            <div className="stats-circle">
              {firPercent}
            </div>
          </div>
        </div>
        <p>ROUND MILESTONES</p>
        <div className="round-milestones">
          {milestones && milestones.map((stone, index) => (
            <div key={index} className="each-milestone">
              <div className="milestone-title">
                <p>{stone.title}</p>
              </div>
              <div className="milestone-symbol">
                {/* <i className="fas fa-certificate fa-7x"></i> */}
                <img src="https://www.thegrint.com/assets/images/trophy_room/gold.png" alt="milestone shield"/>
                <h2 className="stone-initial">{stone.initial}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default RoundCard