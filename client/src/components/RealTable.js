import React, {Component} from 'react'
import {getRealTable} from '../utils'

export default class RealTable extends Component{

  constructor(props){
    super(props)
  }




  render(){
    if(!this.state && this.props.teams.length > 0){
      console.log("set state here", this.props.teams);
      this.setState({
        table: getRealTable(this.props.teams),
      })
    }
    return(
      <div>
        {this.state &&
          <ul>
            {this.state.table.map((team, i) =>
              <li onClick={()=>this.props.addTeam(...this.props.teams.filter(t => t.team === team.team))}>{i+1}. {team.team} {team.games} {team.diff} {team.points}</li>
            )}
          </ul>
        }
        {!this.state &&
        <div>Laddar</div>
        }
      </div>

    )
  }
}
