import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import SelectCourse from './SelectCourse';
import ScorecardTop from './ScorecardTop';
import './AddScore.css';

const AddScore = () => {
  const sessionUser = useSelector(state => state.session?.user)
  const teeData = useSelector(state => state.holes?.teeData)
  // can get the round teebox id from the holes
  const [hole1Score, setHole1Score] = useState(4)
  const [hole2Score, setHole2Score] = useState(4)
  const [hole3Score, setHole3Score] = useState(4)
  const [hole4Score, setHole4Score] = useState(4)
  const [hole5Score, setHole5Score] = useState(4)
  const [hole6Score, setHole6Score] = useState(4)
  const [hole7Score, setHole7Score] = useState(4)
  const [hole8Score, setHole8Score] = useState(4)
  const [hole9Score, setHole9Score] = useState(4)
  const [hole10Score, setHole10Score] = useState(4)
  const [hole11Score, setHole11Score] = useState(4)
  const [hole12Score, setHole12Score] = useState(4)
  const [hole13Score, setHole13Score] = useState(4)
  const [hole14Score, setHole14Score] = useState(4)
  const [hole15Score, setHole15Score] = useState(4)
  const [hole16Score, setHole16Score] = useState(4)
  const [hole17Score, setHole17Score] = useState(4)
  const [hole18Score, setHole18Score] = useState(4)
  const [hole1Putts, setHole1Putts] = useState(2)
  const [hole2Putts, setHole2Putts] = useState(2)
  const [hole3Putts, setHole3Putts] = useState(2)
  const [hole4Putts, setHole4Putts] = useState(2)
  const [hole5Putts, setHole5Putts] = useState(2)
  const [hole6Putts, setHole6Putts] = useState(2)
  const [hole7Putts, setHole7Putts] = useState(2)
  const [hole8Putts, setHole8Putts] = useState(2)
  const [hole9Putts, setHole9Putts] = useState(2)
  const [hole10Putts, setHole10Putts] = useState(2)
  const [hole11Putts, setHole11Putts] = useState(2)
  const [hole12Putts, setHole12Putts] = useState(2)
  const [hole13Putts, setHole13Putts] = useState(2)
  const [hole14Putts, setHole14Putts] = useState(2)
  const [hole15Putts, setHole15Putts] = useState(2)
  const [hole16Putts, setHole16Putts] = useState(2)
  const [hole17Putts, setHole17Putts] = useState(2)
  const [hole18Putts, setHole18Putts] = useState(2)
  const [frontPutts, setFrontPutts] = useState(18)
  const [backPutts, setBackPutts] = useState(18)
  const [frontScore, setFrontScore] = useState(36)
  const [backScore, setBackScore] = useState(36)
  
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
      // setRoundScores(scores)
      // setRoundPutts(putts)
    }
  }, [teeData])

  useEffect(() => {
    const frontSum = parseInt(hole1Putts) + parseInt(hole2Putts) + parseInt(hole3Putts) + parseInt(hole4Putts) + parseInt(hole5Putts) + parseInt(hole6Putts) + parseInt(hole7Putts) + parseInt(hole8Putts) + parseInt(hole9Putts)
    setFrontPutts(frontSum)
  }, [hole1Putts, hole2Putts, hole3Putts, hole4Putts, hole5Putts, hole6Putts, hole7Putts, hole8Putts, hole9Putts])
  
  useEffect(() => {
    setBackPutts(parseInt(hole10Putts) + parseInt(hole11Putts) + parseInt(hole12Putts) + parseInt(hole13Putts) + parseInt(hole14Putts) + parseInt(hole15Putts) + parseInt(hole16Putts) + parseInt(hole17Putts) + parseInt(hole18Putts))
  }, [hole10Putts, hole11Putts, hole12Putts, hole13Putts, hole14Putts, hole15Putts, hole16Putts, hole17Putts, hole18Putts])
  
  useEffect(() => {
    setFrontScore(parseInt(hole1Score) + parseInt(hole2Score) + parseInt(hole3Score) + parseInt(hole4Score) + parseInt(hole5Score) + parseInt(hole6Score) + parseInt(hole7Score) + parseInt(hole8Score) + parseInt(hole9Score))
  }, [hole1Score, hole2Score, hole3Score, hole4Score, hole5Score, hole6Score, hole7Score, hole8Score, hole9Score])
  
  useEffect(() => {
    setBackScore(parseInt(hole10Score) + parseInt(hole11Score) + parseInt(hole12Score) + parseInt(hole13Score) + parseInt(hole14Score) + parseInt(hole15Score) + parseInt(hole16Score) + parseInt(hole17Score) + parseInt(hole18Score))
  }, [hole10Score, hole11Score, hole12Score, hole13Score, hole14Score, hole15Score, hole16Score, hole17Score, hole18Score])


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
              <tr className="scores-input-wrapper">
                <th>Score</th>
                <div id="table-data">
                  <td>
                    <input
                      value={hole1Score}
                      onChange={e=> setHole1Score(e.target.value)}></input>
                  </td>
                </div>
                <div id="table-data">
                  <td>
                    <input
                      value={hole2Score}
                      onChange={e=> setHole2Score(e.target.value)}></input>
                  </td>
                </div>
                <div id="table-data">
                  <td>
                    <input
                      value={hole3Score}
                      onChange={e=> setHole3Score(e.target.value)}></input>
                  </td>
                </div>
                <div id="table-data">
                  <td>
                    <input
                      value={hole4Score}
                      onChange={e=> setHole4Score(e.target.value)}></input>
                  </td>
                </div>
                <div id="table-data">
                  <td>
                    <input
                      value={hole5Score}
                      onChange={e=> setHole5Score(e.target.value)}></input>
                  </td>
                </div>
                <div id="table-data">
                  <td>
                    <input
                      value={hole6Score}
                      onChange={e=> setHole6Score(e.target.value)}></input>
                  </td>
                </div>
                <div id="table-data">
                  <td>
                    <input
                      value={hole7Score}
                      onChange={e=> setHole7Score(e.target.value)}></input>
                  </td>
                </div>
                <div id="table-data">
                  <td>
                    <input
                      value={hole8Score}
                      onChange={e=> setHole8Score(e.target.value)}></input>
                  </td>
                </div>
                <div id="table-data">
                  <td>
                    <input
                      value={hole9Score}
                      onChange={e=> setHole9Score(e.target.value)}></input>
                  </td>
                </div>
                <div id="table-data">
                  <td>
                    {frontScore}
                  </td>
                </div>
                <div id="table-data">
                  <td>
                    <input
                      value={hole10Score}
                      onChange={e=> setHole10Score(e.target.value)}></input>
                  </td>
                </div>
                <div id="table-data">
                  <td>
                    <input
                      value={hole11Score}
                      onChange={e=> setHole11Score(e.target.value)}></input>
                  </td>
                </div>
                <div id="table-data">
                  <td>
                    <input
                      value={hole12Score}
                      onChange={e=> setHole12Score(e.target.value)}></input>
                  </td>
                </div>
                <div id="table-data">
                  <td>
                    <input
                      value={hole13Score}
                      onChange={e=> setHole13Score(e.target.value)}></input>
                  </td>
                </div>
                <div id="table-data">
                  <td>
                    <input
                      value={hole14Score}
                      onChange={e=> setHole14Score(e.target.value)}></input>
                  </td>
                </div>
                <div id="table-data">
                  <td>
                    <input
                      value={hole15Score}
                      onChange={e=> setHole15Score(e.target.value)}></input>
                  </td>
                </div>
                <div id="table-data">
                  <td>
                    <input
                      value={hole16Score}
                      onChange={e=> setHole16Score(e.target.value)}></input>
                  </td>
                </div>
                <div id="table-data">
                  <td>
                    <input
                      value={hole17Score}
                      onChange={e=> setHole17Score(e.target.value)}></input>
                  </td>
                </div>
                <div id="table-data">
                  <td>
                    <input
                      value={hole18Score}
                      onChange={e=> setHole18Score(e.target.value)}></input>
                  </td>
                </div>
                <div id="table-data">
                  <td>
                    {backScore}
                  </td>
                </div>
                <div id="table-data">
                  <td>
                    {frontScore + backScore}
                  </td>
                </div>
              </tr>
              <tr className="scores-input-wrapper">
                <th>Putts</th>
                <div id="table-data">
                  <td>
                    <input
                      value={hole1Putts}
                      onChange={e => setHole1Putts(e.target.value)}></input>
                  </td>
                  <div id="table-data">
                    <td>
                      <input
                        value={hole2Putts}
                        onChange={e => setHole2Putts(e.target.value)}></input>
                    </td>
                  </div>
                  <div id="table-data">
                    <td>
                      <input
                        value={hole3Putts}
                        onChange={e => setHole3Putts(e.target.value)}></input>
                    </td>
                  </div>
                  <div id="table-data">
                    <td>
                      <input
                        value={hole4Putts}
                        onChange={e => setHole4Putts(e.target.value)}></input>
                    </td>
                  </div>
                  <div id="table-data">
                    <td>
                      <input
                        value={hole5Putts}
                        onChange={e => setHole5Putts(e.target.value)}></input>
                    </td>
                  </div>
                  <div id="table-data">
                    <td>
                      <input
                        value={hole6Putts}
                        onChange={e => setHole6Putts(e.target.value)}></input>
                    </td>
                  </div>
                  <div id="table-data">
                    <td>
                      <input
                        value={hole7Putts}
                        onChange={e => setHole7Putts(e.target.value)}></input>
                    </td>
                  </div>
                  <div id="table-data">
                    <td>
                      <input
                        value={hole8Putts}
                        onChange={e => setHole8Putts(e.target.value)}></input>
                    </td>
                  </div>
                  <div id="table-data">
                    <td>
                      <input
                        value={hole9Putts}
                        onChange={e => setHole9Putts(e.target.value)}></input>
                    </td>
                  </div>
                  <div id="table-data">
                    <td>
                      {frontPutts}
                    </td>
                  </div>
                  <div id="table-data">
                    <td>
                      <input
                        value={hole10Putts}
                        onChange={e => setHole10Putts(e.target.value)}></input>
                    </td>
                  </div>
                  <div id="table-data">
                    <td>
                      <input
                        value={hole11Putts}
                        onChange={e => setHole11Putts(e.target.value)}></input>
                    </td>
                  </div>
                  <div id="table-data">
                    <td>
                      <input
                        value={hole12Putts}
                        onChange={e => setHole12Putts(e.target.value)}></input>
                    </td>
                  </div>
                  <div id="table-data">
                    <td>
                      <input
                        value={hole13Putts}
                        onChange={e => setHole13Putts(e.target.value)}></input>
                    </td>
                  </div>
                  <div id="table-data">
                    <td>
                      <input
                        value={hole14Putts}
                        onChange={e => setHole14Putts(e.target.value)}></input>
                    </td>
                  </div>
                  <div id="table-data">
                    <td>
                      <input
                        value={hole15Putts}
                        onChange={e => setHole15Putts(e.target.value)}></input>
                    </td>
                  </div>
                  <div id="table-data">
                    <td>
                      <input
                        value={hole16Putts}
                        onChange={e => setHole16Putts(e.target.value)}></input>
                    </td>
                  </div>
                  <div id="table-data">
                    <td>
                      <input
                        value={hole17Putts}
                        onChange={e => setHole17Putts(e.target.value)}></input>
                    </td>
                  </div>
                  <div id="table-data">
                    <td>
                      <input
                        value={hole18Putts}
                        onChange={e => setHole18Putts(e.target.value)}></input>
                    </td>
                  </div>
                  <div id="table-data">
                    <td>
                      {backPutts}
                    </td>
                  </div>
                  <div id="table-data">
                    <td>
                      {frontPutts + backPutts}
                    </td>
                  </div>
                </div>
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