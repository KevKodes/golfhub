import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import SelectCourse from './SelectCourse';
import ScorecardTop from './ScorecardTop';
import { addNewRound } from '../../store/rounds';
import './AddScore.css';

const AddScore = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector(state => state.session?.user)
  const teeData = useSelector(state => state.holes?.teeData)
  const roundDate = useSelector(state => state.holes?.newRoundDate)
  let [errors, setErrors] = useState([]);

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
  const [hole1Fairway, setHole1Fairway] = useState(null)
  const [hole2Fairway, setHole2Fairway] = useState(null)
  const [hole3Fairway, setHole3Fairway] = useState(null)
  const [hole4Fairway, setHole4Fairway] = useState(null)
  const [hole5Fairway, setHole5Fairway] = useState(null)
  const [hole6Fairway, setHole6Fairway] = useState(null)
  const [hole7Fairway, setHole7Fairway] = useState(null)
  const [hole8Fairway, setHole8Fairway] = useState(null)
  const [hole9Fairway, setHole9Fairway] = useState(null)
  const [hole10Fairway, setHole10Fairway] = useState(null)
  const [hole11Fairway, setHole11Fairway] = useState(null)
  const [hole12Fairway, setHole12Fairway] = useState(null)
  const [hole13Fairway, setHole13Fairway] = useState(null)
  const [hole14Fairway, setHole14Fairway] = useState(null)
  const [hole15Fairway, setHole15Fairway] = useState(null)
  const [hole16Fairway, setHole16Fairway] = useState(null)
  const [hole17Fairway, setHole17Fairway] = useState(null)
  const [hole18Fairway, setHole18Fairway] = useState(null)
  const [frontPutts, setFrontPutts] = useState(18)
  const [backPutts, setBackPutts] = useState(18)
  const [frontScore, setFrontScore] = useState(36)
  const [backScore, setBackScore] = useState(36)
  const [renderFairways, setRenderFairways] = useState(false)

  const frontScoreArray = [hole1Score, hole2Score, hole3Score, hole4Score, hole5Score, hole6Score, hole7Score, hole8Score, hole9Score]
  const backScoreArray = [hole10Score, hole11Score, hole12Score, hole13Score, hole14Score, hole15Score, hole16Score, hole17Score, hole18Score]
  const frontPuttsArray = [hole1Putts, hole2Putts, hole3Putts, hole4Putts, hole5Putts, hole6Putts, hole7Putts, hole8Putts, hole9Putts]
  const backPuttsArray = [hole10Putts, hole11Putts, hole12Putts, hole13Putts, hole14Putts, hole15Putts, hole16Putts, hole17Putts, hole18Putts]

  // useEffect(() => {
  //   teeData = {}
  // }, [])

  // set the default inputs
  useEffect(() => {
    if (teeData?.length) {
      parseInt(teeData[0].par) !== 3 && setHole1Fairway(true)
      parseInt(teeData[1].par) !== 3 && setHole2Fairway(true)
      parseInt(teeData[2].par) !== 3 && setHole3Fairway(true)
      parseInt(teeData[3].par) !== 3 && setHole4Fairway(true)
      parseInt(teeData[4].par) !== 3 && setHole5Fairway(true)
      parseInt(teeData[5].par) !== 3 && setHole6Fairway(true)
      parseInt(teeData[6].par) !== 3 && setHole7Fairway(true)
      parseInt(teeData[7].par) !== 3 && setHole8Fairway(true)
      parseInt(teeData[8].par) !== 3 && setHole9Fairway(true)
      parseInt(teeData[9].par) !== 3 && setHole10Fairway(true)
      parseInt(teeData[10].par) !== 3 && setHole11Fairway(true)
      parseInt(teeData[11].par) !== 3 && setHole12Fairway(true)
      parseInt(teeData[12].par) !== 3 && setHole13Fairway(true)
      parseInt(teeData[13].par) !== 3 && setHole14Fairway(true)
      parseInt(teeData[14].par) !== 3 && setHole15Fairway(true)
      parseInt(teeData[15].par) !== 3 && setHole16Fairway(true)
      parseInt(teeData[16].par) !== 3 && setHole17Fairway(true)
      parseInt(teeData[17].par) !== 3 && setHole18Fairway(true)
      setRenderFairways(true)
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

  const handleScoreSubmit = async () => {
    // ensure that all the scores and putts are numbers
    setErrors([])
    errors = []

    const errSet = new Set();
    for (let i = 0; i < 9; i++) {
      if ( frontPuttsArray[i] === '' || backPuttsArray[i] === '') {
        errSet.add('All putt inputs must contain a number')
      }
      if (frontScoreArray[i] === '' || backScoreArray[i] === '') {
        errSet.add('All score inputs must contain a number')
      }
      if (frontPuttsArray[i] >= frontScoreArray[i] || backPuttsArray[i] >= backScoreArray[i]) {
        errSet.add("Invalid Entry: you can't have more putts than strokes in one hole")
      }
    }
    const errArr = []
    for (const err of errSet) {
      errArr.push(err)
    }
    if (errArr.length) {
      setErrors([...errArr])
      return
    }

    if (!errors.length) {
      // set the new round and get its id to put into the scores
      const newRoundData = {
        userId: sessionUser.id,
        teeboxId: teeData[0].teeboxId,
        roundDate
      }
      const addedRound = await dispatch(addNewRound(newRoundData))
  
      const scores = [hole1Score, hole2Score, hole3Score, hole4Score, hole5Score, hole6Score, hole7Score, hole8Score, hole9Score, hole10Score, hole11Score, hole12Score, hole13Score, hole14Score, hole15Score, hole16Score, hole17Score, hole18Score]
      const putts = [hole1Putts, hole2Putts, hole3Putts, hole4Putts, hole5Putts, hole6Putts, hole7Putts, hole8Putts, hole9Putts, hole10Putts, hole11Putts, hole12Putts, hole13Putts, hole14Putts, hole15Putts, hole16Putts, hole17Putts, hole18Putts]
      const fairways = [hole1Fairway, hole2Fairway, hole3Fairway, hole4Fairway, hole5Fairway, hole6Fairway, hole7Fairway, hole8Fairway, hole9Fairway, hole10Fairway, hole11Fairway, hole12Fairway, hole13Fairway, hole14Fairway, hole15Fairway, hole16Fairway, hole17Fairway, hole18Fairway]
      const roundId = addedRound.id;
      const newScores = []
      for (let i = 0; i < 18; i++) {
        const holeScore = {
          roundId,
          holeId: teeData[i].id,
          score: scores[i],
          numPutts: putts[i],
          fairway: fairways[i]
        };
        newScores.push(holeScore)
      }
      const response = await fetch(`/api/scores`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newScores)
      })
      if (response.ok) {
        history.push('/')
      }
    }
  }

  return (
    <div className="addscore-wrapper">
      <h1 id="page-title">Add Score</h1>
      <SelectCourse />
      <div className="full-addscore">
        { teeData && <ScorecardTop teeData={teeData} /> }
      
        <div className="scorecard-lower">
          { teeData?.length && (
            <>
              <table className="add-score-card">
                <tbody>
                  <tr className="scores-input-wrapper">
                    <th className="wide-col">Score</th>
                    <td id="table-data">
                      <input
                        value={hole1Score}
                        onChange={e=> setHole1Score(e.target.value)}></input>
                    </td>
                    <td id="table-data">
                      <input
                        value={hole2Score}
                        onChange={e=> setHole2Score(e.target.value)}></input>
                    </td>
                    <td id="table-data">
                      <input
                        value={hole3Score}
                        onChange={e=> setHole3Score(e.target.value)}></input>
                    </td>
                    <td id="table-data">
                      <input
                        value={hole4Score}
                        onChange={e=> setHole4Score(e.target.value)}></input>
                    </td>
                    <td id="table-data">
                      <input
                        value={hole5Score}
                        onChange={e=> setHole5Score(e.target.value)}></input>
                    </td>
                    <td id="table-data">
                      <input
                        value={hole6Score}
                        onChange={e=> setHole6Score(e.target.value)}></input>
                    </td>
                    <td id="table-data">
                      <input
                        value={hole7Score}
                        onChange={e=> setHole7Score(e.target.value)}></input>
                    </td>
                    <td id="table-data">
                      <input
                        value={hole8Score}
                        onChange={e=> setHole8Score(e.target.value)}></input>
                    </td>
                    <td id="table-data">
                      <input
                        value={hole9Score}
                        onChange={e=> setHole9Score(e.target.value)}></input>
                    </td>
                    <td id="table-data">
                      {frontScore}
                    </td>
                    <td id="table-data">
                      <input
                        value={hole10Score}
                        onChange={e=> setHole10Score(e.target.value)}></input>
                    </td>
                    <td id="table-data">
                      <input
                        value={hole11Score}
                        onChange={e=> setHole11Score(e.target.value)}></input>
                    </td>
                    <td id="table-data">
                      <input
                        value={hole12Score}
                        onChange={e=> setHole12Score(e.target.value)}></input>
                    </td>
                    <td id="table-data">
                      <input
                        value={hole13Score}
                        onChange={e=> setHole13Score(e.target.value)}></input>
                    </td>
                    <td id="table-data">
                      <input
                        value={hole14Score}
                        onChange={e=> setHole14Score(e.target.value)}></input>
                    </td>
                    <td id="table-data">
                      <input
                        value={hole15Score}
                        onChange={e=> setHole15Score(e.target.value)}></input>
                    </td>
                    <td id="table-data">
                      <input
                        value={hole16Score}
                        onChange={e=> setHole16Score(e.target.value)}></input>
                    </td>
                    <td id="table-data">
                      <input
                        value={hole17Score}
                        onChange={e=> setHole17Score(e.target.value)}></input>
                    </td>
                    <td id="table-data">
                      <input
                        value={hole18Score}
                        onChange={e=> setHole18Score(e.target.value)}></input>
                    </td>
                    <td id="table-data">
                      {backScore}
                    </td>
                    <td id="table-data">
                      {frontScore + backScore}
                    </td>
                  </tr>
                  <tr className="putts-input-wrapper">
                    <th className="wide-col">Putts</th>
                    <td id="table-data">
                      <input
                        value={hole1Putts}
                        onChange={e => setHole1Putts(e.target.value)}></input>
                    </td>
                    <td id="table-data">
                      <input
                        value={hole2Putts}
                        onChange={e => setHole2Putts(e.target.value)}></input>
                    </td>
                    <td id="table-data">
                      <input
                        value={hole3Putts}
                        onChange={e => setHole3Putts(e.target.value)}></input>
                    </td>
                    <td id="table-data">
                      <input
                        value={hole4Putts}
                        onChange={e => setHole4Putts(e.target.value)}></input>
                    </td>
                    <td id="table-data">
                      <input
                        value={hole5Putts}
                        onChange={e => setHole5Putts(e.target.value)}></input>
                    </td>
                    <td id="table-data">
                      <input
                        value={hole6Putts}
                        onChange={e => setHole6Putts(e.target.value)}></input>
                    </td>
                    <td id="table-data">
                      <input
                        value={hole7Putts}
                        onChange={e => setHole7Putts(e.target.value)}></input>
                    </td>
                    <td id="table-data">
                      <input
                        value={hole8Putts}
                        onChange={e => setHole8Putts(e.target.value)}></input>
                    </td>
                    <td id="table-data">
                      <input
                        value={hole9Putts}
                        onChange={e => setHole9Putts(e.target.value)}></input>
                    </td>
                    <td id="table-data">
                      {frontPutts}
                    </td>
                    <td id="table-data">
                      <input
                        value={hole10Putts}
                        onChange={e => setHole10Putts(e.target.value)}></input>
                    </td>
                    <td id="table-data">
                      <input
                        value={hole11Putts}
                        onChange={e => setHole11Putts(e.target.value)}></input>
                    </td>
                    <td id="table-data">
                      <input
                        value={hole12Putts}
                        onChange={e => setHole12Putts(e.target.value)}></input>
                    </td>
                    <td id="table-data">
                      <input
                        value={hole13Putts}
                        onChange={e => setHole13Putts(e.target.value)}></input>
                    </td>
                    <td id="table-data">
                      <input
                        value={hole14Putts}
                        onChange={e => setHole14Putts(e.target.value)}></input>
                    </td>
                    <td id="table-data">
                      <input
                        value={hole15Putts}
                        onChange={e => setHole15Putts(e.target.value)}></input>
                    </td>
                    <td id="table-data">
                      <input
                        value={hole16Putts}
                        onChange={e => setHole16Putts(e.target.value)}></input>
                    </td>
                    <td id="table-data">
                      <input
                        value={hole17Putts}
                        onChange={e => setHole17Putts(e.target.value)}></input>
                    </td>
                    <td id="table-data">
                      <input
                        value={hole18Putts}
                        onChange={e => setHole18Putts(e.target.value)}></input>
                    </td>
                    <td id="table-data">
                      {backPutts}
                    </td>
                    <td id="table-data">
                      {frontPutts + backPutts}
                    </td>
                  </tr>
                  <tr>
                    <th className="wide-col">Fairway</th>
                    { renderFairways && (
                        <>
                          { hole1Fairway === null ? (
                            <td id="table-data"></td>
                          ) : (
                            <td id="table-data">
                              <select
                                value={hole1Fairway}
                                onChange={e => setHole1Fairway(e.target.value)}
                              >
                                <option value={true}>hit</option>
                                <option value={false}>miss</option>
                              </select>
                            </td>
                          )}
                          { hole2Fairway === null ? (
                            <td id="table-data"></td>
                          ) : (
                            <td id="table-data">
                              <select
                                value={hole2Fairway}
                                onChange={e => setHole2Fairway(e.target.value)}
                              >
                                <option value={true}>hit</option>
                                <option value={false}>miss</option>
                              </select>
                            </td>
                          )}
                          { hole3Fairway === null ? (
                            <td id="table-data"></td>
                          ) : (
                            <td id="table-data">
                              <select
                                value={hole3Fairway}
                                onChange={e => setHole3Fairway(e.target.value)}
                              >
                                <option value={true}>hit</option>
                                <option value={false}>miss</option>
                              </select>
                            </td>
                          )}
                          { hole4Fairway === null ? (
                            <td id="table-data"></td>
                          ) : (
                            <td id="table-data">
                              <select
                                value={hole4Fairway}
                                onChange={e => setHole4Fairway(e.target.value)}
                              >
                                <option value={true}>hit</option>
                                <option value={false}>miss</option>
                              </select>
                            </td>
                          )}
                          { hole5Fairway === null ? (
                            <td id="table-data"></td>
                          ) : (
                            <td id="table-data">
                              <select
                                value={hole5Fairway}
                                onChange={e => setHole5Fairway(e.target.value)}
                              >
                                <option value={true}>hit</option>
                                <option value={false}>miss</option>
                              </select>
                            </td>
                          )}
                          { hole6Fairway === null ? (
                            <td id="table-data"></td>
                          ) : (
                            <td id="table-data">
                              <select
                                value={hole6Fairway}
                                onChange={e => setHole6Fairway(e.target.value)}
                              >
                                <option value={true}>hit</option>
                                <option value={false}>miss</option>
                              </select>
                            </td>
                          )}
                          { hole7Fairway === null ? (
                            <td id="table-data"></td>
                          ) : (
                            <td id="table-data">
                              <select
                                value={hole7Fairway}
                                onChange={e => setHole7Fairway(e.target.value)}
                              >
                                <option value={true}>hit</option>
                                <option value={false}>miss</option>
                              </select>
                            </td>
                          )}
                          { hole8Fairway === null ? (
                            <td id="table-data"></td>
                          ) : (
                            <td id="table-data">
                              <select
                                value={hole8Fairway}
                                onChange={e => setHole8Fairway(e.target.value)}
                              >
                                <option value={true}>hit</option>
                                <option value={false}>miss</option>
                              </select>
                            </td>
                          )}
                          { hole9Fairway === null ? (
                            <td id="table-data"></td>
                          ) : (
                            <td id="table-data">
                              <select
                                value={hole9Fairway}
                                onChange={e => setHole9Fairway(e.target.value)}
                              >
                                <option value={true}>hit</option>
                                <option value={false}>miss</option>
                              </select>
                            </td>
                          )}
                          <td id="table-data"></td>
                          { hole10Fairway === null ? (
                            <td id="table-data"></td>
                          ) : (
                            <td id="table-data">
                              <select
                                value={hole10Fairway}
                                onChange={e => setHole10Fairway(e.target.value)}
                              >
                                <option value={true}>hit</option>
                                <option value={false}>miss</option>
                              </select>
                            </td>
                          )}
                          { hole11Fairway === null ? (
                            <td id="table-data"></td>
                          ) : (
                            <td id="table-data">
                              <select
                                value={hole11Fairway}
                                onChange={e => setHole11Fairway(e.target.value)}
                              >
                                <option value={true}>hit</option>
                                <option value={false}>miss</option>
                              </select>
                            </td>
                          )}
                          { hole12Fairway === null ? (
                            <td id="table-data"></td>
                          ) : (
                            <td id="table-data">
                              <select
                                value={hole12Fairway}
                                onChange={e => setHole12Fairway(e.target.value)}
                              >
                                <option value={true}>hit</option>
                                <option value={false}>miss</option>
                              </select>
                            </td>
                          )}
                          { hole13Fairway === null ? (
                            <td id="table-data"></td>
                          ) : (
                            <td id="table-data">
                              <select
                                value={hole13Fairway}
                                onChange={e => setHole13Fairway(e.target.value)}
                              >
                                <option value={true}>hit</option>
                                <option value={false}>miss</option>
                              </select>
                            </td>
                          )}
                          { hole14Fairway === null ? (
                            <td id="table-data"></td>
                          ) : (
                            <td id="table-data">
                              <select
                                value={hole14Fairway}
                                onChange={e => setHole14Fairway(e.target.value)}
                              >
                                <option value={true}>hit</option>
                                <option value={false}>miss</option>
                              </select>
                            </td>
                          )}
                          { hole15Fairway === null ? (
                            <td id="table-data"></td>
                          ) : (
                            <td id="table-data">
                              <select
                                value={hole15Fairway}
                                onChange={e => setHole15Fairway(e.target.value)}
                              >
                                <option value={true}>hit</option>
                                <option value={false}>miss</option>
                              </select>
                            </td>
                          )}
                          { hole16Fairway === null ? (
                            <td id="table-data"></td>
                          ) : (
                            <td id="table-data">
                              <select
                                value={hole16Fairway}
                                onChange={e => setHole16Fairway(e.target.value)}
                              >
                                <option value={true}>hit</option>
                                <option value={false}>miss</option>
                              </select>
                            </td>
                          )}
                          { hole17Fairway === null ? (
                            <td id="table-data"></td>
                          ) : (
                            <td id="table-data">
                              <select
                                value={hole17Fairway}
                                onChange={e => setHole17Fairway(e.target.value)}
                              >
                                <option value={true}>hit</option>
                                <option value={false}>miss</option>
                              </select>
                            </td>
                          )}
                          { hole18Fairway === null ? (
                            <td id="table-data"></td>
                          ) : (
                            <td id="table-data">
                              <select
                                value={hole18Fairway}
                                onChange={e => setHole18Fairway(e.target.value)}
                              >
                                <option value={true}>hit</option>
                                <option value={false}>miss</option>
                              </select>
                            </td>
                          )}
                          <td id="table-data"></td>
                          <td id="table-data"></td>
                        </>
                    )}
                  </tr>
                </tbody>
              </table>
              <div>
                {errors.map((error) => (
                  <div className="scorecard-errors">{error}</div>
                ))}
              </div>
              <button onClick={handleScoreSubmit} id="addbtn">Add Round</button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default AddScore;