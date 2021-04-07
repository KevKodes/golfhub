const GET_TEE_DATA = 'holes/GET_TEE_DATA'

const getHoles = holes => ({
  type: GET_TEE_DATA,
  holes
})

export const getTeeboxData = teeboxId => async (dispatch) => {
  const response = await fetch(`/api/holes/${teeboxId}`)

  if (response.ok) {
    const holes = await response.json()
    dispatch(getHoles(holes.holes))
  }
}

const initialState = {}
const holesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TEE_DATA:
      const loadedHoles = [...action.holes]
      return {
        ...state,
        teeData: loadedHoles
      }
    default:
      return state
  }
}

export default holesReducer;