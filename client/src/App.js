import React, { Component } from 'react';
import './App.css';
import { bindActionCreators } from 'redux'
import * as teamActions from './actions/teamActions'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import RealTable from './components/RealTable'
import FakeTable from './components/FakeTable'

class App extends Component {

  componentDidMount(){
    fetch('/api/getTeams')
      .then(res => res.json())
      .then(teams => this.props.getTeams(teams))
  }
  render() {

    return (
      <div>
        {!this.props.teams.length>0 &&
        <div className="App">
          <div className="loading">Laddar</div>
        </div>
        }
        {this.props.teams.length>0 &&
          <div className="App">
            <RealTable
              teams= {this.props.teams}
              addTeam={this.props.addTeam}
            />
            <FakeTable
                teams= {this.props.fakeTableTeams}
                removeTeam = {this.props.removeTeam}
              />
          </div>
        }

      </div>
    );
  }
}


function mapStateToProps (state) {
  return {
    teams: state.teams.teams,
    fakeTableTeams: state.teams.fakeTableTeams,
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
  fakeTableTeams: PropTypes.arrayOf(PropTypes.any),
  addTeam: PropTypes.func.isRequired,
  removeTeam: PropTypes.func.isRequired,
}

App.defaultProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
