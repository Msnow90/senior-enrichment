import React, { Component } from 'react';
import { connect } from 'react-redux';
import { submitStudent } from '../reducers/students';

class CreateStudent extends Component {

  render() {
    return (
      <div className="text-align">
        <label>Create a new student</label>
        <form onSubmit={this.props.submitStudent}>

          <div className="input-group margin-center">
            <input
            type="text" className="form-control"
              name="studentName" placeholder="Student name..." aria-describedby="basic-addon2" />
          </div>

          <div className="input-group margin-center">
          <select
            className="input-group"
            name="campusId">
            {
              this.props.campuses.map(campus => <option key={campus.id} value={campus.id}>{campus.name}</option>)
            }
          </select>
          </div>
          <div className="input-group margin-center">
            <label>Bio: </label>
            <input
              type="text"
              name="bio"
              className="form-control" />
            </div>
          <button>Create</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    campuses: state.campuses
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    submitStudent(evt) {
      evt.preventDefault();
      dispatch(submitStudent(evt.target));
      evt.target.studentName.value = '';
      evt.target.bio.value = '';
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateStudent);
