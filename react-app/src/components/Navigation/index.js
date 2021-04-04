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
  
  // logic for when to show the search dropdown
  useEffect(() => {
    const filterCourses = str => {
      const string = str.toLowerCase();
      const filteredList = courses?.filter(course => (
        course.courseName.toLowerCase().includes(string) //|| course.cuisineType.toLowerCase().includes(string)
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

  // Redirect to the course page
  const handleCourseRedirect = (course) => {
    setSearchString("")
    history.push(`/course/${course.id}`)
  }

  return (
    <>
      <div className="sidebar">
        <div className="sidebar-links">
          <NavLink to="/" exact={true}>
            <i className="fas fa-home fa-2x"></i>
          </NavLink>
          <NavLink to="/stats" exact={true} activeClassName="active">
            <i className="far fa-chart-bar fa-2x"></i>
          </NavLink>
          <NavLink to="/add_score" exact={true}>
            <i className="far fa-edit fa-2x"></i>
          </NavLink>
          <div className="sidebar-separator">
            {/* <i class="fas fa-ellipsis-h fa-2x"></i> */}
            ___
          </div>
          <p className="sidebar-name">
            Kevin Pitzer
          </p>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/KevKodes">
            <i className="fab fa-github fa-2x"></i>
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/kevin-pitzer/">
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
        </div>
      </div>
      <nav>
        <div className="nav-left">
          <div className="nav-logo">
            <div className="placeholder">
              empty
            </div>
            <img id="nav-logo-pic" src="./tee.jpeg" alt="cool logo" />
            <h1>Golfhub</h1>
          </div>
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
          {/* <li>
            <NavLink to="/" exact={true} activeClassName="active">
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/stats" exact={true} activeClassName="active">
              Stats
            </NavLink>
          </li> */}
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
    </>
  );
}

export default NavBar;