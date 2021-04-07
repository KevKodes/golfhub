import React from 'react';
import { useSelector } from 'react-redux';
import SelectCourse from './SelectCourse';
import './AddScore.css';

const AddScore = () => {
  // const sessionUser = useSelector(state => state.session?.user)
  // console.log('the selected tee is: ', roundTee)
  const teeData = useSelector(state => state.teeboxes?.teeData)
  console.log(teeData)
  // need par, index, yardage

  return (
    <div className="addscore-wrapper">
      <h1>ADD SCORE</h1>
      <SelectCourse />
      <div className="full-addscore">
        
      </div>

    </div>
  )
}

export default AddScore;