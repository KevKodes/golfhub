import React from 'react';
import { useSelector } from 'react-redux';
import SelectCourse from './SelectCourse';
import ScorecardTop from './ScorecardTop';
import './AddScore.css';

const AddScore = () => {
  // const sessionUser = useSelector(state => state.session?.user)
  const teeData = useSelector(state => state.holes?.teeData)
  console.log('teeData in the upper component: ', teeData)

  return (
    <div className="addscore-wrapper">
      <h1>ADD SCORE</h1>
      <SelectCourse />
      <div className="full-addscore">
        { teeData && <ScorecardTop teeData={teeData} /> }
      </div>

    </div>
  )
}

export default AddScore;