import * as types from '../constants'

const initialState = {
  teams: [],
  fakeTableTeams: [],
}

export default function programsReducer (state = initialState, action) {
  switch (action.type) {
    case types.GET_TEAMS:
      return {
        ...state,
        teams: [...state.teams, ...action.payload],
      }
    case types.ADD_TEAM:
    {
      if(state.fakeTableTeams.filter(team => team.team === action.payload.team).length>0){
        return state
      }
      return {
        ...state,
        fakeTableTeams: [...state.fakeTableTeams, action.payload],
      }
    }

    case types.REMOVE_TEAM:
      let index = -1
      state.fakeTableTeams.filter((team,i) => {
        if(team.team === action.payload.team){
          index = i
        }
      })
      let fakteTableTeamsCopy = [...state.fakeTableTeams]
      fakteTableTeamsCopy.splice(index, 1)
      return {
        ...state,
        fakeTableTeams: [...fakteTableTeamsCopy]
      }
    default:
    return state
  }
}
