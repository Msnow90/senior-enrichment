import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateCampus, changeCampus, getCampus } from '../reducers/campus';


class UpdateCampus extends Component {
  constructor() {
    super();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.getCampus(this.props.match.params.campusId)
  }

  handleSubmit() {
    this.props.updateCampus(this.props.campus);
  }

  render() {

    return (
      <div>
        { this.props.campus &&
        <form onSubmit={this.handleSubmit}>
          <div className="input-group">
            <span className="input-group-addon">Campus Name:</span>
            <input
              type="text"
              className="form-control"
              value={this.props.campus.name}
              onChange={(evt) => this.props.handleChange('name', evt.target.value)} />
            <button className="btn btn-md btn-primary">Update Student</button>
          </div>
        </form>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    campus: state.campus
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateCampus: (campus) => {
      dispatch(updateCampus(campus));
      ownProps.history.push('/campuses')
    },

    getCampus: (campusId) => {
      dispatch(getCampus(campusId));
    },

    handleChange: (propName, value) => {
      dispatch(changeCampus(propName, value));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateCampus)


