import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { getStudents } from '../reducers/students';
import { getCampuses } from '../reducers/campuses';

import Home from './Home';
import Students from './Students';
import Campuses from './Campuses';
import SingleCampus from './SingleCampus';
import SingleStudent from './SingleStudent';
import UpdateStudent from './UpdateStudent';
import UpdateCampus from './UpdateCampus';

class Root extends Component {
  componentDidMount() {
    this.props.getStudents();
    this.props.getCampuses();
  }
  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-default">
            <Link to="/"><span className="nav-btn">Home</span></Link>
            <Link to="/students"><span className="nav-btn">Get ze fucking students</span></Link>
            <Link to="/campuses"><span className="nav-btn">Get ze fucking campuses</span></Link>
          </nav>
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Home campuses={this.props.campuses}/>} />
            <Route
              exact
              path="/students"
              render={() => <Students students={this.props.students} />} />
            <Route
              exact
              path="/campuses"
              render={() => <Campuses campuses={this.props.campuses} />} />
            <Route
              exact
              path="/campuses/:campusId"
              component={SingleCampus} />
            <Route
              exact
              path="/students/:studentId"
              component={SingleStudent} />
            <Route
              exact
              path="/students/:studentId/update"
              component={UpdateStudent} />
            <Route
              exact
              path="/campuses/:campusId/update"
              component={UpdateCampus} />
          </Switch>
        </div>
      </Router>
    )
  }
}

const mapStateToProps = state => {
  return {
    students: state.students,
    campuses: state.campuses
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getStudents: () => {
      dispatch(getStudents())
    },
    getCampuses: () => {
      dispatch(getCampuses())
    }
  }
}

const RootContainer = connect(mapStateToProps, mapDispatchToProps)(Root);

export default RootContainer;
