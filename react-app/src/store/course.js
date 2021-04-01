const LOAD_COURSES = 'courses/LOAD_COURSES';


const loadCourses = (list) => ({
  type: LOAD_COURSES,
  list
});

export const getCourses = () => async (dispatch) => {
  const response = await fetch(`/api/courses`)

  if (response.ok) {
    const courseObj = await response.json()
    dispatch(loadCourses(courseObj))
  }
}

const initialState = {}
const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_COURSES:
      // const loadedCourses = {}
      // action.list.courses.forEach(course => loadedCourses[course.id] = course)
      const loadedCourses = [...action.list.courses]
      return {
        ...state,
        courseList: loadedCourses
      }
    default:
      return state;
  }
}

export default courseReducer;