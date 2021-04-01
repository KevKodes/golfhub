//action types
const LOAD_DASH = 'rounds/LOAD_DASH';

// action cretors
const loadDash = (payload) => ({
  type: LOAD_DASH,
  payload
})

// thunks
export const getDashboardRounds = (userId) => async (dispatch) => {
  const response = await fetch(`/api/rounds/${userId}`)

  if (response.ok) {
    const rounds = await response.json()
    dispatch(loadDash(rounds))
  }
}


// Reducer
const initialState = {}

const roundsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_DASH:
      const loadedRounds = []
      action.payload.dashboard_rounds.forEach(round => {
        loadedRounds.push(round)
      });
      return {
        ...state,
        dashRounds: loadedRounds
      }
    default:
      return state;
  }
}

export default roundsReducer;