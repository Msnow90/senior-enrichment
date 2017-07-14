import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getStudent, changeStudent, updateStudent } from '../reducers/student';

class UpdateStudent extends Component {

  constructor() {
    super();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.getStudent(this.props.match.params.studentId);
  }

  handleSubmit() {
    this.props.updateStudent(this.props.student);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          { this.props.student &&
          <div key={this.props.student.id} className="input-group">
            <span className="input-group-addon">Student Name:</span>
            <input
              type="text"
              className="form-control"
              value={this.props.student.name}
              onChange={(evt) => this.props.handleChange('name', evt.target.value)} />
              <br />
              <button className="btn btn-md btn-primary">Update Student</button>
          </div>
          }
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    student: state.student
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {

    getStudent: (studentId) => {
      dispatch(getStudent(studentId));
    },
    handleChange: (propName, value) => {
      dispatch(changeStudent(propName, value))
    },
    updateStudent: (student) => {
      dispatch(updateStudent(student))
      ownProps.history.push('/students')
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateStudent)
