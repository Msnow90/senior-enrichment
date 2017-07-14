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
           <div className="col-lg-4 col-md-6 col-xs-6 studentContainer" key={campus.id}>
            <span className="span-name-label">Campus Name: </span><p>{campus.name}<span onClick={() => props.deleteCampus(campus.id)} className='btn btn-sm btn-danger span-delete'>X</span></p>
            <Link to={`/campuses/${campus.id}`}><button className="btn btn-md btn-info">See campus info</button></Link>

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
