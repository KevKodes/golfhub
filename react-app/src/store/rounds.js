//action types
const LOAD_DASH = 'rounds/LOAD_DASH';
const ADD_ROUND = 'rounds/ADD_ROUND';

// action cretors
const loadDash = (payload) => ({
  type: LOAD_DASH,
  payload
})

const addRound = payload => ({
  type: ADD_ROUND,
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

export const addNewRound = round => async (dispatch) => {
  const response = await fetch(`/api/rounds`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(round),
  });

  if (response.ok) {
    const round = await response.json()
    dispatch(addRound(round))
    return round
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
    case ADD_ROUND:
      return {
        ...state,
        newRound: action.payload
      }
    default:
      return state;
  }
}

export default roundsReducer;