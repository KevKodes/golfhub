//action types
const LOAD_DASH = 'rounds/LOAD_DASH';
const ADD_ROUND = 'rounds/ADD_ROUND';
const LOAD_ROUND = 'rounds/LOAD_ROUND';

// action cretors
const loadDash = (payload) => ({
  type: LOAD_DASH,
  payload
})

const addRound = payload => ({
  type: ADD_ROUND,
  payload
})

const loadEditRound = round => ({
  type: LOAD_ROUND,
  round
})

// thunks
export const getDashboardRounds = (userId) => async (dispatch) => {
  const response = await fetch(`/api/rounds/dashboard/${userId}`)

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

export const getEditRound = roundId => async (dispatch) => {
  const response = await fetch(`/api/rounds/${roundId}`)

  if (response.ok) {
    const editRound = await response.json()
    dispatch(loadEditRound(editRound))
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
    case LOAD_ROUND:
      const loadedRound = action.round
      return {
        ...state,
        editRound: loadedRound
      }
    default:
      return state;
  }
}

export default roundsReducer;