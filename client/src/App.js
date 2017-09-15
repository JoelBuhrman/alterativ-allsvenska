import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { bindActionCreators } from 'redux'
import * as teamActions from './actions/teamActions'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'


class App extends Component {

  componentDidMount(){
    fetch('/api/getTeams')
      .then(res => res.json())
      .then(teams => this.props.getTeams(teams))
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
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
