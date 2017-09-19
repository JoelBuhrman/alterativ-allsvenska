import React, {Component} from 'react'
import {getFakeTable} from '../utils'
import Stats from './Stats'

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
      <div className="fakeTable">
        <div className="header">Alternativsvenskan 2017</div>
        <Stats />
        {this.state.fakeTable &&
          <ul>
            {this.state.fakeTable.map((team, i) =>
              <li
                className={ i===0 ? "first row" : (i === 13 ? "qual row" : (i === 14 ? "last row" : "row"))}
                onClick={()=>this.props.removeTeam(team)}>

                <div className="position">{i+1}.</div>
                <div className="team">{team.team}</div>
                <div className="games">{team.games}</div>
                <div className="diff">{team.diff}</div>
                <div className="points">{team.points}</div>
                <div className="average">{team.games > 0 ? (team.points/team.games).toFixed(2) : 0}</div>

              </li>
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
