import * as types from '../constants'

export function getTeams (teams) {
  return (dispatch) => {
    dispatch({
      type: types.GET_TEAMS,
      payload: teams,
    })
  }
}
