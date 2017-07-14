import React from 'react';
import { Link } from 'react-router-dom';
import CreateStudent from './CreateStudent';
import { connect } from 'react-redux';
import { removeStudent } from '../reducers/students';

const Students = (props) => {
  return (
    <div className="container">
      <div className="row">
      <CreateStudent />
      {
        props.students.map(student => {
          return (
            <div className="col-lg-4 col-md-6 col-xs-6 studentContainer" key={student.id}>
            <span className="span-name-label">Student Name: </span><p>{student.name}<span onClick={() => props.removeStudent(student.id)} className='btn btn-sm btn-danger span-delete'>X</span></p>
            <Link to={`/students/${student.id}`}><button className="btn btn-md btn-info">See student info</button></Link>

            </div>
          )
        })
      }
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeStudent: (studentId) => {
      dispatch(removeStudent(studentId))
    }
  }
}

export default connect(null, mapDispatchToProps)(Students);
