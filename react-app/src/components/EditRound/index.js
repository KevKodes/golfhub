import React, { useEffect, useState } from 'react';
import SelectCourse from '../AddScore/SelectCourse';
import ScorecardTop from '../AddScore/ScorecardTop';
import RoundInfo from './RoundInfo';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { getEditRound } from '../../store/rounds';
import '../AddScore/AddScore.css';
import './EditRound.css';

const EditRound = () => {
  const dispatch = useDispatch();
  const { roundId } = useParams();
  const teeData = useSelector(state => state.holes?.teeData);
  const roundInfo = useSelector(state => state.rounds?.editRound);
  // query the round and associated holes
  useEffect(() => {
    if (roundId) {
      dispatch(getEditRound(roundId))
    }
  }, [roundId])

  console.log('round info: ', roundInfo)

  return (
    <div className="addscore-wrapper">
      <h1 id="page-title">Edit Round</h1>
      <div className="round-info">
        { roundInfo && <RoundInfo roundInfo={roundInfo} />}
      </div>
      <div>
        {teeData && <ScorecardTop teeData={teeData} />}
      </div>
    </div>
  )
}

export default EditRound;