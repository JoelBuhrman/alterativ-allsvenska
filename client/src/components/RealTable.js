import React, {Component} from 'react'
import {getRealTable} from '../utils'
import Stats from './Stats'

export default class RealTable extends Component{

  constructor(props){
    super(props)
  }




  render(){
    if(!this.state && this.props.teams.length > 0){
      this.setState({
        table: getRealTable(this.props.teams),
      })
    }
    return(
      <div className="realTable">
        <div className="header">Allsvenskan 2017</div>
        <Stats />
        {this.state &&
          <ul>
            {this.state.table.map((team, i) =>
              <li
                className={ i===0 ? "first row" : (i === 13 ? "qual row" : (i === 14 ? "last row" : "row"))}
                onClick={()=>this.props.addTeam(...this.props.teams.filter(t => t.team === team.team))}>

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
      </div>

    )
  }
}
