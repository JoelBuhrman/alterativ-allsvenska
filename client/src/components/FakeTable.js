import React, {Component} from 'react'
import {getFakeTable} from '../utils'

export default class FakeTable extends Component{

  constructor(props){
    super(props)

    this.state = {
      fakteTableTeams: []
    }
  }


  render(){
    if(this.state.fakteTableTeams !== this.props.teams){
      this.setState({
        fakteTableTeams: this.props.teams,
        fakeTable: getFakeTable(this.props.teams),
      })
    }

    return(
      <div>
        {this.state.fakeTable &&
          <ul>
            {this.state.fakeTable.map((team, i) =>
              <li onClick={()=>this.props.removeTeam(team)}>{i+1}. {team.team} {team.games} {team.diff} {team.points}</li>
            )}
          </ul>
        }
        {!this.state &&
        <div>No added teams</div>
        }
      </div>

    )
  }
}
