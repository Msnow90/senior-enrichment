import React, {Component} from 'react';
import { connect } from 'react-redux';
import { submitCampus } from '../reducers/campuses';

class CreateCampus extends Component {

  render() {
    return (
<div className="text-align">
        <label>Create a new campus</label>
        <form onSubmit={this.props.submitStudent}>

          <div className="input-group margin-center">
            <input
            type="text" className="form-control"
              name="campusName" placeholder="Campus name..." aria-describedby="basic-addon2" />
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

const mapDispatchToProps = (dispatch) => {
  return {
    submitCampus(evt) {
      evt.preventDefault();
      dispatch(submitCampus(evt.target));
      evt.target.campusName.value = '';
      evt.target.bio.value = '';
    }
  }
}

export default connect(null, mapDispatchToProps)(CreateCampus);
