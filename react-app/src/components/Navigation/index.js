import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import { getCourses } from '../../store/course';
import './Navigation.css'

const NavBar = ({ setAuthenticated }) => {
  const dispatch = useDispatch();
  // const history = useHistory();
  const [searchString, setSearchString] = useState('');
  const [showDropdown, setShowDropdown] = useState(null);
  const [searchReturn, setSearchReturn] = useState([]);
  const courses = useSelector(state => state.courses)

  // get all of the courses
  useEffect(() => {
    dispatch(getCourses());
  },[dispatch])

  // update the dropdown when searchString changes
  const filterCourses = str => {
    const string = str.toLowerCase();
    const filteredList = courses?.length?.filter(course => (
      course.name.toLowerCase().includes(string) //|| course.cuisineType.toLowerCase().includes(string)
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

    if (searchString.length > 2) {
      setSearchReturn(parsedList);
      setShowDropdown(true)
    }
  }, [searchString])

  return (
    <nav>
      <div className="nav-search">
        <i className="fas fa-search"></i>
        <input
          className="search-bar"
          value={searchString}
          onChange={e => setSearchString(e.target.value)}
          placeholder="Find Courses"
        />
        <div className="dropdown-search-list">
          {showDropdown && searchReturn.map(item => (
            <div
              key={item.id}
              className="search-list-block"
              onClick={() => setSearchString(item.name)}
            >
              <div className="search-list-item-name">{item.name}</div>
              <div className="search-list-item-type">{item.cuisineType}</div>
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
            <div className="text">
              Add a Score
            </div>
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