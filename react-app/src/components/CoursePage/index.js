import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './CoursePage.css';

const CoursePage = () => {
  // const dispatch = useDispatch()
  const {courseId} = useParams()
  const [pageCourse, setPageCourse] = useState({})
  const courseList = useSelector(state => state.courses?.courseList)

  useEffect(() => {
    if (courseList) {
      const foundCourse = courseList.find(course => parseInt(course.id) === parseInt(courseId))
      setPageCourse(foundCourse)
    }

  }, [courseList, courseId])

  return (
    <div className="course-wrapper">
      {pageCourse ? (
        <div className="course-info-wrapper">
          <div className="course-top">
            <div className="course-main">
              <img src={pageCourse.imageURL} alt="course picture" />
              {pageCourse.courseName}
              <div className="course-main-description">
                {pageCourse.description}
              </div>
            </div>
            <div className="course-sidebar">
              <div className="course-sidebar-header">
                {pageCourse.courseName}
                {pageCourse.address}
              </div>
            </div>
          </div>
          <div className="course-bottom">
            Scorecard
          </div>
        </div>
      ) : (
        <h1>Course not found</h1>
      )}
    </div>
  )
}

export default CoursePage;