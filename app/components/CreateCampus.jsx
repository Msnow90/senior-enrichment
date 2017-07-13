import React, {Component} from 'react';
import { connect } from 'react-redux';
import { submitCampus } from '../reducers/campuses';

class CreateCampus extends Component {

  render() {
    return (
      <div>
        <label>Create a new campus</label>
        <form onSubmit={this.props.submitCampus}>
          <input
            type="text"
            name="campusName" />
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
      dispatch(submitCampus(evt.target.campusName.value));
      evt.target.campusName.value = '';
    }
  }
}

export default connect(null, mapDispatchToProps)(CreateCampus);
