import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import { getCourses } from '../../store/course';
import './Navigation.css'

const NavBar = ({ setAuthenticated }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [searchString, setSearchString] = useState('');
  const [showDropdown, setShowDropdown] = useState(null);
  const [searchReturn, setSearchReturn] = useState([]);
  const courses = useSelector(state => state.courses?.courseList)

  // get all of the courses
  useEffect(() => {
    dispatch(getCourses());
  },[dispatch])

  // update the dropdown when searchString changes
  const filterCourses = str => {
    const string = str.toLowerCase();
    const filteredList = courses?.filter(course => (
      course.courseName.toLowerCase().includes(string) //|| course.cuisineType.toLowerCase().includes(string)
    ))
    return filteredList
  }

  // logic for when to show the search dropdown
  useEffect(() => {
    // setErrors([])
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
  }, [searchString])

  // Redirect to the course page
  const handleCourseRedirect = (course) => {
    setSearchString("")
    history.push(`/course/${course.id}`)
  }

  return (
    <nav>
      <div className="nav-left">
        <NavLink to="/dashboard" exact={true} activeClassName="active">
          GolfHub
        </NavLink>
      </div>
      <div className="nav-search">
        <i className="fas fa-search"></i>
        <input
          className="search-bar"
          value={searchString}
          onChange={e => setSearchString(e.target.value)}
          placeholder="Find Courses"
        />
        <div className="dropdown-search-list">
          {showDropdown && searchReturn.map(course => (
            <div
              key={course.id}
              className="search-list-block"
              onClick={() => handleCourseRedirect(course)}
            >
              <div className="search-list-course-name">{course.courseName}</div>
            </div>
          ))}
        </div>
      </div>
      <ul>
        <li>
          <NavLink to="/dashboard" exact={true} activeClassName="active">
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/stats" exact={true} activeClassName="active">
            Stats
          </NavLink>
        </li>
        <li className="nav-add-score">
          <NavLink to="/add_score" exact={true} activeClassName="active">
            <p className="add-score-text">
              Add a Score
            </p>
          </NavLink>
        </li>
        <li>
          <LogoutButton setAuthenticated={setAuthenticated} />
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;