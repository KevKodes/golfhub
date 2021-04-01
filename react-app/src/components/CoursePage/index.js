import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './CoursePage.css';

const CoursePage = () => {
  const dispatch = useDispatch()
  const {courseId} = useParams()
  const courseList = useSelector(state => state.courses?.courseList)

  const pageCourse = courseList?.find(course => course.id == courseId)

  return (
    <div className="course-wrapper">
      <div>
        {pageCourse?.courseName}
      </div>
    </div>
  )
}

export default CoursePage;