import React from 'react';

const RoundCard = ({ round }) => {
  const girPercent = Math.floor(round.round_data.gir * 100)
  const firPercent = Math.floor(round.round_data.fir * 100)

  return (
    <div className="inner-rounds-wrapper">
      <div className="inner-rounds-header">
        <h3>{round.courseName}</h3>
        <p>{round.roundDate}</p>
        <p>{round.teebox} Tees</p>
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
        </div>
      </div>
    </div>
  )
}

export default RoundCard