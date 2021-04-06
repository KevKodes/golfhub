import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getScorecard } from '../../store/course';
import CourseLocation from './CourseLocation';
import './CoursePage.css';

const CoursePage = () => {
  const dispatch = useDispatch()
  const {courseId} = useParams()
  const [pageCourse, setPageCourse] = useState({})
  const [cardPar, setCardPar] = useState([])
  const [frontIndex, setFrontIndex] = useState([])
  const [backIndex, setBackIndex] = useState([])
  const [scoreTees, setScoreTees] = useState([])
  const courseList = useSelector(state => state.courses?.courseList)
  const scorecard = useSelector(state => state.courses?.scorecard)

  // set up the tee information to loop through when building the scorecard
  useEffect(() => {
    if (scorecard) {
      // set up the hole index row and the par row
      const teeId = scorecard.tees[0]?.id
      let frontIdx = []
      let frontPar = []
      for (let i = 1; i < 10; i++) {
        const foundHole = scorecard.holes.find(hole => parseInt(hole.holeNumber) === parseInt(i) && parseInt(hole.teeboxId) === parseInt(teeId));
        frontIdx.push(foundHole?.handicap)
        frontPar.push(foundHole?.par)
      }
      setFrontIndex(frontIdx)
      let backIdx = []
      let backPar = []
      for (let i = 10; i < 19; i++) {
        const foundHole = scorecard.holes.find(hole => parseInt(hole.holeNumber) === parseInt(i) && parseInt(hole.teeboxId) === parseInt(teeId));
        backIdx.push(foundHole?.handicap)
        backPar.push(foundHole?.par)
      }
      setBackIndex(backIdx)
      // set up the par row
      const frontParTot = frontPar.reduce((acc, cv) => acc + cv)
      const backParTot = backPar.reduce((acc, cv) => acc + cv)
      const parTot = frontParTot + backParTot
      setCardPar([...frontPar, frontParTot, ...backPar, backParTot, parTot])

      // set up the tee rows
      let formattedTees = []
      for (const tee of scorecard.tees) {
        let newTee = [tee.teeboxName];
        for (let i = 1; i < 10; i++) {
          const foundHole = scorecard.holes.find(hole => parseInt(hole.holeNumber) === parseInt(i) && parseInt(hole.teeboxId) === parseInt(tee.id));
          newTee.push(foundHole.yardage);
        }
        newTee.push(tee.frontYardage);
        for (let i = 10; i < 19; i++) {
          const foundHole = scorecard.holes.find(hole => parseInt(hole.holeNumber) === parseInt(i) && parseInt(hole.teeboxId) === parseInt(tee.id));
          newTee.push(foundHole.yardage);
        }
        newTee.push(tee.backYardage);
        newTee.push(tee.frontYardage + tee.backYardage);
        formattedTees.push(newTee)
      }
      setScoreTees(formattedTees)
    }
  },[scorecard])

  useEffect(() => {
    dispatch(getScorecard(courseId))
  },[courseId, dispatch])

  useEffect(() => {
    if (courseList) {
      const foundCourse = courseList.find(course => parseInt(course.id) === parseInt(courseId))
      setPageCourse(foundCourse)
    }

  }, [courseList, courseId])

  return (
    <div className="course-wrapper">
      {pageCourse ? (
        <div className="course-info-wrapper">
          <div className="course-top">
            <div className="course-main">
              <img src={pageCourse.imageURL} alt="course" />
              <h2>{pageCourse.courseName}</h2>
              <div className="course-main-description">
                {pageCourse.description}
              </div>
            </div>
            <div className="course-sidebar">
              <div className="course-sidebar-header">
                <h2>Quick Facts</h2>
                <div className="facts-name">{pageCourse.courseName}</div>
              </div>
              <div className="course-sidebar-info">
                <div className="info-chunk">
                  <p>Holes</p> 18  |
                </div>
                <div className="info-chunk">
                  <p>Par</p> {cardPar[cardPar.length - 1]}  |
                </div>
                {scoreTees.length && (
                  <div className="info-chunk">
                    <p>Length</p> {scoreTees[0][scoreTees[0].length - 1]}  |
                  </div>
                )}
                { scorecard?.tees && (
                  <>
                    <div className="info-chunk">
                      <p>Slope</p> {scorecard.tees[0].slope}  |
                    </div>
                    <div className="info-chunk">
                      <p>Rating</p> {scorecard.tees[0].rating}
                    </div>
                  </>
                )}
              </div>
              <div id="map">
                { <CourseLocation course={pageCourse}/> }
                {pageCourse.address}
              </div>
            </div>
          </div>
          <div className="course-bottom">
            <h2>Scorecard</h2>
            <div>
              { scorecard?.tees && scorecard.tees.map((tee, idx) => (
                <div key={idx} className="tee-ratings">
                  {tee.teeboxName} {tee.slope} / {tee.rating}
                </div>
              ))}
            </div>
            <table className="score-card">
              <thead>
                <tr>
                  <th><div className="hole-col">HOLE</div></th>
                  <th>1</th>
                  <th>2</th>
                  <th>3</th>
                  <th>4</th>
                  <th>5</th>
                  <th>6</th>
                  <th>7</th>
                  <th>8</th>
                  <th>9</th>
                  <th>OUT</th>
                  <th>10</th>
                  <th>11</th>
                  <th>12</th>
                  <th>13</th>
                  <th>14</th>
                  <th>15</th>
                  <th>16</th>
                  <th>17</th>
                  <th>18</th>
                  <th>IN</th>
                  <th>TOT</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>INDEX</td>
                  { frontIndex && frontIndex.map(hc => (
                    <td key={hc}>{hc}</td>
                  ))}
                  <td></td>
                  {backIndex && backIndex.map(hc => (
                    <td key={hc}>{hc}</td>
                  ))}
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>PAR</td>
                  { cardPar && cardPar.map((parVal, idx) => (
                    <td key={idx}>{parVal}</td>
                  ))}
                </tr>
                { scoreTees && scoreTees.map((teeArr, idx) => (
                  <tr key={idx}>
                    {teeArr.map((eachHole, index) => (
                      <td key={index}>{eachHole}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <h1>Course not found</h1>
      )}
    </div>
  )
}

export default CoursePage;