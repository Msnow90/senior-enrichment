import React from 'react';
import { Link } from 'react-router-dom';
import CreateStudent from './CreateStudent';
import { connect } from 'react-redux';
import { removeStudent } from '../reducers/students';

const Students = (props) => {
  return (
    <div>
      <CreateStudent />
      {
        props.students.map(student => {
          return (
            <div key={student.id}>
            <Link to={`/students/${student.id}`}><h1>{student.name}</h1></Link>
            <button onClick={() => props.removeStudent(student.id)} className='btn btn-lg btn-danger'>DELETE ME!!!</button>
            </div>
          )
        })
      }
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
