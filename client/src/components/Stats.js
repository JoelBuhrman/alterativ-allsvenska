import React, {Component} from 'react'

export default class Stats extends Component{

  render(){
    return(
      <div>
        <div style={{marginLeft: '60%'}}className="games titles">S</div>
        <div className="diff titles">+/-</div>
        <div className="points titles">P</div>
        <div className="average titles">AVG</div>
      </div>
    )
  }
}
