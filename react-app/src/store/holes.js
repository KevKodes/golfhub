const GET_TEE_DATA = 'holes/GET_TEE_DATA'

const getHoles = (holes, roundDate) => ({
  type: GET_TEE_DATA,
  holes,
  roundDate
})

export const getTeeboxData = (teeboxId, roundDate) => async (dispatch) => {
  const response = await fetch(`/api/holes/${teeboxId}`)

  if (response.ok) {
    const holes = await response.json()
    dispatch(getHoles(holes.holes, roundDate))
  }
}

const initialState = {}
const holesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TEE_DATA:
      const loadedHoles = [...action.holes]
      return {
        ...state,
        teeData: loadedHoles,
        newRoundDate: action.roundDate
      }
    default:
      return state
  }
}

export default holesReducer;