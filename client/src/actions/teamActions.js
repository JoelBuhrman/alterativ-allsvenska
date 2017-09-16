import * as types from '../constants'

export function getTeams (teams) {
  return (dispatch) => {
    dispatch({
      type: types.GET_TEAMS,
      payload: teams,
    })
  }
}

export function addTeam (team) {
  return (dispatch) => {
    dispatch({
      type: types.ADD_TEAM,
      payload: team,
    })
  }
}

export function removeTeam (team) {
  return (dispatch) => {
    dispatch({
      type: types.REMOVE_TEAM,
      payload: team,
    })
  }
}
