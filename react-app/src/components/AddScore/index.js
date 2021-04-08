import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import SelectCourse from './SelectCourse';
import ScorecardTop from './ScorecardTop';
import './AddScore.css';

const AddScore = () => {
  const sessionUser = useSelector(state => state.session?.user)
  const teeData = useSelector(state => state.holes?.teeData)
  // can get the round teebox id from the holes
  const [roundScores, setRoundScores] = useState([])
  const [roundPutts, setRoundPutts] = useState([])
  const [hole1Score, setHole1Score] = useState([3])
  const [hole2Score, setHole2Score] = useState(null)
  const [hole3Score, setHole3Score] = useState(null)
  const [hole4Score, setHole4Score] = useState(null)
  const [hole5Score, setHole5Score] = useState(null)
  const [hole6Score, setHole6Score] = useState(null)
  const [hole7Score, setHole7Score] = useState(null)
  const [hole8Score, setHole8Score] = useState(null)
  const [hole9Score, setHole9Score] = useState(null)
  console.log('teeData in the upper component: ', teeData)

  // set the default inputs
  // if the par is 3 set the input for fairway to have to disabled attribute
  useEffect(() => {
    if (teeData?.length) {
      const scores = []
      const putts = []
      for (let i = 0; i < 18; i++) {
        scores.push(teeData[0].par)
        putts.push(2)
        
      }
      setRoundScores(scores)
      setRoundPutts(putts)
    }
  }, [teeData])


  // make a post to the db with an object: round data and score data
  /*
  postRound = {
    roundData: {
      userId,
      teeboxId,
      roundDate
    },
    scoreData: {
      1: {
        roundId,
        holeId,
        score,
        numPutts,
        fairway: null, true, or false
      }
    }
  }
  */

  const handlePutt = (e, idx) => {
    const oldPutts = roundPutts
    oldPutts[idx] = e.target.value
    setRoundPutts(oldPutts)
  }

  return (
    <div className="addscore-wrapper">
      <h1>ADD SCORE</h1>
      <SelectCourse />
      <div className="full-addscore">
        { teeData && <ScorecardTop teeData={teeData} /> }
      </div>
      <div className="scorecard-lower">
        { teeData?.length && (
          <table className="score-card">
            <tbody>
              <tr>
                <th>Score</th>
                <td><input value={roundScores[0]} onChange={e=> setHole1Score(e.target.value)}></input></td>
              </tr>
              <tr>
                <th>Putts</th>
                {roundPutts && roundPutts.map((num, idx) => (
                  <td key={idx}>
                    <input 
                      value={roundPutts[idx]}
                      onChange={(e, idx) => handlePutt(e, idx)}></input>
                  </td>
                ))}
              </tr>
              <tr>
                <th>Fairway</th>
              </tr>
            </tbody>
          </table>

        )}
      </div>

    </div>
  )
}

export default AddScore;