import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteCampus } from '../reducers/campuses';

import CreateCampusContainer from './CreateCampus'

const Campuses = (props) => {
  return (
    <div>
      <CreateCampusContainer />
      {
        props.campuses.map(campus => {
          return (
            <div key={campus.id}>
              <Link to={`/campuses/${campus.id}`}>To Campus</Link>
              <h1>{campus.name}</h1>
              <button onClick={() => props.deleteCampus(campus.id)} className='btn btn-sm btn-danger'>DELETE ME</button>
            </div>
          )
        })
      }

    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteCampus: (campusId) => {
      dispatch(deleteCampus(campusId));
    }
  }
}

export default connect(null, mapDispatchToProps)(Campuses)
