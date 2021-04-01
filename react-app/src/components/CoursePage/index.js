import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './CoursePage.css';

const CoursePage = () => {
  // const dispatch = useDispatch()
  const {courseId} = useParams()
  const [pageCourse, setPageCourse] = useState({})
  const courseList = useSelector(state => state.courses?.courseList)

  // Need to query the course teeboxes and the holes for the teeboxes

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
              <h2>{pageCourse.courseName}</h2>
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
            <h2>Scorecard</h2>
            <p>teebox info here</p>
            <table className="score-card">
              <thead>
                <tr>
                  <th>HOLE</th>
                  <th>1</th>
                  <th>2</th>
                  <th>3</th>
                  <th>4</th>
                  <th>5</th>
                  <th>6</th>
                  <th>7</th>
                  <th>8</th>
                  <th>9</th>
                  <th>OUT</th>
                  <th>10</th>
                  <th>11</th>
                  <th>12</th>
                  <th>13</th>
                  <th>14</th>
                  <th>15</th>
                  <th>16</th>
                  <th>17</th>
                  <th>18</th>
                  <th>IN</th>
                  <th>TOT</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>INDEX</th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <h1>Course not found</h1>
      )}
    </div>
  )
}

export default CoursePage;