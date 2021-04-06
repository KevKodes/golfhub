import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCourses } from '../../store/course';
import DatePicker from "react-datepicker";

import './SelectCourse.css';
import "react-datepicker/dist/react-datepicker.css";

const SelectCourse = () => {
  const dispatch = useDispatch();
  const [searchString, setSearchString] = useState('');
  const [showDropdown, setShowDropdown] = useState(null);
  const [searchReturn, setSearchReturn] = useState([]);
  const [roundCourseId, setRoundCourseId] = useState(null);
  const [roundDate, setRoundDate] = useState(new Date());
  const [roundTee, setRoundTee] = useState(null);
  const [courseTees, setCourseTees] = useState([]);
  const courses = useSelector(state => state.courses?.courseList);

  // get all of the courses
  useEffect(() => {
    dispatch(getCourses());
  }, [dispatch])

  // logic for when to show the search dropdown
  useEffect(() => {
    const filterCourses = str => {
      const string = str.toLowerCase();
      const filteredList = courses?.filter(course => (
        course.courseName.toLowerCase().includes(string)
      ))
      return filteredList
    }
    const parsedList = filterCourses(searchString)

    if ((parsedList && parsedList.length === 1 && parsedList[0].name === searchString) ||
      searchString.length < 2
    ) {
      return setShowDropdown(null)
    }

    if (searchString.length >= 2) {
      setSearchReturn(parsedList);
      setShowDropdown(true)
    }
  }, [searchString, courses])

  const handleCourseSelection = (course) => {
    setSearchString(course.courseName)
    setRoundCourseId(course)
    setShowDropdown(false)
  }

  const handleTeeOptions = () => {
    console.log('you gotta render the tees for the course')
  }

  const handleTeeSelection = tee => {
    setRoundTee(tee)
  }

  return (
    <div className="select-course-wrapper">
      <div className="select-date">
        <p>Date:</p>
        <DatePicker
          selected={roundDate}
          onChange={date => setRoundDate(date)}
        />
      </div>
      <div className="score-search">
        <i className="fas fa-search"></i>
        <input
          className="search-bar"
          value={searchString}
          onChange={e => setSearchString(e.target.value)}
          placeholder="Where did you play?"
        />
        <div className="dropdown-search-list">
          {showDropdown && searchReturn.map(course => (
            <div
              key={course.id}
              className="search-list-block"
              onClick={() => handleCourseSelection(course)}
            >
              <div className="search-list-course-name">{course.courseName}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="score-tee">
        <button onClick={handleTeeOptions} className="dropbtn">
          Select a tee
        </button>
        <div id="tee-options">
          { courseTees && courseTees.map(tee => (
            <div
              key={tee.id}
              className="tee-option-block"
              onClick={() => handleTeeSelection(tee)}
            >
              <div className="tee-options-name">{tee.name}</div>
            </div>
          ))}
        </div>
        <div className="selected-tee">{roundTee}</div>
      </div>
    </div>
  )
}

export default SelectCourse