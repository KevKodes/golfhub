const LOAD_COURSES = 'courses/LOAD_COURSES';
const LOAD_CARD = 'courses/LOAD_CARD'

const loadCourses = (list) => ({
  type: LOAD_COURSES,
  list
});

const loadCard = card => ({
  type: LOAD_CARD,
  card
})

export const getCourses = () => async (dispatch) => {
  const response = await fetch(`/api/courses`)

  if (response.ok) {
    const courseObj = await response.json()
    dispatch(loadCourses(courseObj))
  }
}

export const getScorecard = (courseId) => async (dispatch) => {
  const res = await fetch(`/api/courses/${courseId}/scorecard`)
  if (res.ok) {
    const card = await res.json()
    dispatch(loadCard(card))
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
    case LOAD_CARD:
      const newCard = action.card;
    return {
      ...state,
      scorecard: {...newCard}
    }
    default:
      return state;
  }
}

export default courseReducer;