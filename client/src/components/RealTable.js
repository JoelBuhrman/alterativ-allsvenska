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
        table: getRealTable(this.props.teams)
      })
    }
    return(
      <ul>
        {this.props.teams.map((team) =>
          <li>{team.team}</li>
        )}
      </ul>
    )
  }
}
