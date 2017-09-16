import React, { Component } from 'react';
import './App.css';
import { bindActionCreators } from 'redux'
import * as teamActions from './actions/teamActions'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import RealTable from './components/RealTable'

class App extends Component {

  componentDidMount(){
    fetch('/api/getTeams')
      .then(res => res.json())
      .then(teams => this.props.getTeams(teams))
  }
  render() {
    console.log(this.props.teams);
    return (
      <div className="App">
        <RealTable
          teams= {this.props.teams}
        />
      </div>
    );
  }
}


function mapStateToProps (state) {
  return {
    teams: state.teams.teams,
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(
    {
      ...teamActions,
    },
    dispatch)
}

App.propTypes = {
  teams: PropTypes.arrayOf(PropTypes.any),

}

App.defaultProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
