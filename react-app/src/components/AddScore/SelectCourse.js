import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCourses } from '../../store/course';
import { getCourseTees } from '../../store/teeboxes';
import { getTeeboxData } from '../../store/holes';
import DatePicker from "react-datepicker";
import './SelectCourse.css';
import "react-datepicker/dist/react-datepicker.css";

const SelectCourse = () => {
  const dispatch = useDispatch();
  const [searchString, setSearchString] = useState('');
  const [showDropdown, setShowDropdown] = useState(null);
  const [showTeeOptions, setShowTeeOptions] = useState(null);
  const [searchReturn, setSearchReturn] = useState([]);
  const [roundCourse, setRoundCourse] = useState(null);
  const [roundDate, setRoundDate] = useState(new Date());
  const [roundTee, setRoundTee] = useState(null);
  const courseTees = useSelector(state => state.teeboxes?.courseTees)
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
    setSearchString("")
    setRoundCourse(course)
    setShowDropdown(false)
    setRoundTee(null)
    setShowTeeOptions(false)
    dispatch(getCourseTees(course.id))
  }

  const renderTeeOptions = () => {
    if (showTeeOptions) {
      setShowTeeOptions(false)
    } else {
      setShowTeeOptions(true)
    }
  }

  const handleTeeSelection = tee => {
    setRoundTee(tee)
    setShowTeeOptions(false)
    dispatch(getTeeboxData(tee.id))
    //add the round to the state
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
        <p>Course:</p>
        <div>{roundCourse?.courseName}</div>
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
      { roundCourse && (
        <div className="score-tee">
          <p>Tee:</p>
          <div className="selected-tee">{roundTee?.teeboxName}</div>
          <button onClick={renderTeeOptions} className="dropbtn">
            Select a tee
          </button>
          <div id="tee-options">
            { showTeeOptions && courseTees.map(tee => (
              <div
                key={tee.id}
                className="tee-option-block"
                onClick={() => handleTeeSelection(tee)}
              >
                <div className="tee-options-name">{tee.teeboxName}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default SelectCourse