import React from 'react';
import { NavLink } from 'react-router-dom';

const RoundCard = ({ round }) => {
  const girPercent = Math.floor(round.round_data.gir * 100)
  const firPercent = Math.floor(round.round_data.fir * 100)

  //format the date
  const wackDate = new Date(round.roundDate);
  const fDate = wackDate.toDateString();
  const fArr = fDate.split(' ')
  const formattedDate = `${fArr[1]}, ${fArr[2]} ${fArr[3]}`

  // get the milestones to pass to the round cards with the round data
  const milestones = []
  const stonesObj = round.round_data

  if (parseInt(stonesObj.pars) > 0) {
    milestones.push({
      title: "Pars",
      initial: stonesObj.pars
    })
  }

  if (parseInt(stonesObj.birdies) > 0) {
    milestones.push({
      title: "Birdies",
      initial: stonesObj.birdies
    })
  }

  if (parseInt(stonesObj.eagles) > 0) {
    milestones.push({
      title: "Eagles",
      initial: stonesObj.eagles
    })
  }

  if (parseInt(stonesObj.one_putts) > 0) {
    milestones.push({
      title: "1-Putts",
      initial: stonesObj.one_putts
    })
  }

  if (parseInt(stonesObj.three_putts) === 0) {
    milestones.push({
      title: "No 3-Putts",
      initial: 'P'
    })
  }

  if (parseInt(stonesObj.fir) >= 0.7) {
    milestones.push({
      title: "Drive Acc%",
      initial: Math.round(100 * stonesObj.fir) / 100
    })
  }

  if (parseInt(stonesObj.gir) >= 0.7) {
    milestones.push({
      title: "Green Acc%",
      initial: Math.round(100 * stonesObj.gir) / 100
    })
  }

  if (parseInt(stonesObj.par_saves) > 0) {
    milestones.push({
      title: "Par Saves",
      initial: stonesObj.par_saves
    })
  }

  return (
    <div className="inner-rounds-wrapper">
      <div className="inner-rounds-header">
        <NavLink to={`/course/${round.courseId}`}>
          {round.courseName}
        </NavLink>
        <p>{formattedDate} | {round.teebox} Tees</p>
      </div>
      <div className="inner-card">
        <h3>ROUND STATS</h3>
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
        <h3>ROUND MILESTONES</h3>
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