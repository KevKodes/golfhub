import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import LogoutButton from "../auth/LogoutButton";
import { getCourses } from "../../store/course";
import "./Navigation.css";
import logo from "../../assets/tee.jpeg";

const NavBar = ({ setAuthenticated }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [searchString, setSearchString] = useState("");
  const [showDropdown, setShowDropdown] = useState(null);
  const [searchReturn, setSearchReturn] = useState([]);
  const [randCourse, setRandCourse] = useState(1);
  const courses = useSelector((state) => state.courses?.courseList);
  const sessionUser = useSelector((state) => state.session?.user);

  // get all of the courses
  useEffect(() => {
    dispatch(getCourses());
  }, [dispatch]);

  // set a random course as the endpoint for the explor courses icon
  function randomCourseGen() {
    if (courses) {
      const numCourses = courses.length;
      let randNum = 1 + Math.floor(Math.random() * numCourses);
      while (randNum === randCourse) {
        randNum = 1 + Math.floor(Math.random() * numCourses);
      }
      setRandCourse(randNum);
    }
  }

  // logic for when to show the search dropdown
  useEffect(() => {
    const filterCourses = (str) => {
      const string = str.toLowerCase();
      const filteredList = courses?.filter((course) =>
        course.courseName.toLowerCase().includes(string)
      );
      return filteredList;
    };
    const parsedList = filterCourses(searchString);

    if (
      (parsedList &&
        parsedList.length === 1 &&
        parsedList[0].name === searchString) ||
      searchString.length < 2
    ) {
      return setShowDropdown(null);
    }

    if (searchString.length >= 2) {
      setSearchReturn(parsedList);
      setShowDropdown(true);
    }
  }, [searchString, courses]);

  // Redirect to the course page
  const handleCourseRedirect = (course) => {
    setSearchString("");
    history.push(`/course/${course.id}`);
  };

  const handleCourseExplore = () => {
    history.push(`/course/${randCourse}`);
    randomCourseGen();
  };

  return (
    <>
      <div className="sidebar">
        <div className="sidebar-links">
          <div className="sidebar-link-wrapper">
            <NavLink to="/" exact={true}>
              <i className="fas fa-home fa-2x"></i>
            </NavLink>
            <div className="nav-label">Home</div>
          </div>
          <div className="sidebar-link-wrapper">
            <NavLink to="/stats" exact={true} activeClassName="active">
              <i className="far fa-chart-bar fa-2x"></i>
            </NavLink>
            <div className="nav-label">Stats</div>
          </div>
          <div className="sidebar-link-wrapper">
            <NavLink to="/add_score" exact={true}>
              <i className="far fa-edit fa-2x"></i>
            </NavLink>
            <div className="nav-label">Add a score</div>
          </div>
          <div className="sidebar-link-wrapper">
            <div id="rand-course" onClick={handleCourseExplore}>
              <i className="far fa-flag fa-2x"></i>
            </div>
            <div className="nav-label">Explore a course</div>
          </div>
          <div className="sidebar-separator">___</div>
          <p className="sidebar-name">Kevin Pitzer</p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/KevKodes"
          >
            <i className="fab fa-github fa-2x"></i>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/kevinpitzer/"
          >
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://angel.co/u/kevin-pitzer"
          >
            <i className="fab fa-angellist fa-2x"></i>
          </a>
        </div>
      </div>
      <nav>
        <div className="nav-left">
          <div className="nav-logo">
            <div className="placeholder">empty</div>
            <img id="nav-logo-pic" src={logo} alt="cool logo" />
            <h1>Golfhub</h1>
          </div>
        </div>
        <div className="nav-search">
          <i className="fas fa-search"></i>
          <input
            className="search-bar"
            value={searchString}
            onChange={(e) => setSearchString(e.target.value)}
            placeholder="Find Courses"
          />
          <div className="dropdown-search-list">
            {showDropdown &&
              searchReturn.map((course) => (
                <div
                  key={course.id}
                  className="search-list-block"
                  onClick={() => handleCourseRedirect(course)}
                >
                  <div className="search-list-course-name">
                    {course.courseName}
                  </div>
                </div>
              ))}
          </div>
        </div>
        <ul>
          <li className="nav-add-score">
            <NavLink to="/add_score" exact={true} activeClassName="active">
              <p className="add-score-text">Add a Score</p>
            </NavLink>
          </li>
          <li>
            <LogoutButton setAuthenticated={setAuthenticated} />
          </li>
          <li className="nav-user">
            <img id="nav-logo-pic-small" src={logo} alt="cool logo" />
            <div id="nav-name">{sessionUser?.userName}</div>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
