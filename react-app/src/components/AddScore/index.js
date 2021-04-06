import React from 'react';
import { useSelector } from 'react-redux';
import SelectCourse from './SelectCourse';
import './AddScore.css';

const AddScore = () => {
  const sessionUser = useSelector(state => state.session?.user)

  return (
    <div className="addscore-wrapper">
      <h1>ADD SCORE</h1>
      <SelectCourse />
      <div className="full-addscore">
        <form>
          
        </form>
      </div>

    </div>
  )
}

export default AddScore;