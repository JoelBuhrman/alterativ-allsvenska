import * as types from '../constants'

const initialState = {
  teams: [],
}

export default function programsReducer (state = initialState, action) {
  switch (action.type) {
    case types.GET_TEAMS:
      return {
        ...state,
        teams: [...state.teams, ...action.payload],
      }
    default:
    return state
  }
}
