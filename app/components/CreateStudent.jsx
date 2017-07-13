import React, {Component} from 'react';
import { connect } from 'react-redux';
import { submitStudent } from '../reducers/students';

class CreateStudent extends Component {

  render() {
    return (
      <div>
        <label>Create a new student</label>
        <form onSubmit={this.props.submitStudent}>
          <input
            type="text"
            name="studentName" />
          <select
            name="campusId">
            {
              this.props.campuses.map(campus => <option key={campus.id} value={campus.id}>{campus.name}</option>)
            }
          </select>
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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateStudent);
