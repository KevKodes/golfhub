const GET_TEES = 'teeboxes/GET_TEES';

const getTees = tees => ({
  type: GET_TEES,
  tees
})

export const getCourseTees = courseId => async (dispatch) => {
  const response = await fetch(`/api/teeboxes/${courseId}`)

  if (response.ok) {
    const teeboxes = await response.json()
    dispatch(getTees(teeboxes.courseTees))
  }
}

const initialState = {}
const teeboxReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TEES:
      const loadedTees = [...action.tees]
      return {
        ...state,
        courseTees: loadedTees
      }
    default:
      return state
  }
}

export default teeboxReducer;