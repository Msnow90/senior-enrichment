import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const SingleCampus = (props) => {

  const studentId = props.match.params.studentId;

  const student = (props.students.length) ? props.students.filter(student => {
          return (student.id === +studentId)
        })[0] : {name: '', imgUrl: ''};

  return (
    <div>
      <h2>School Id:</h2>
      <Link to={`/campuses/${student.campusId}`}>
      <p>{student.campusId}</p>
      </Link>
      <h1>Student Name:</h1>
      <h1>{student.name}</h1>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    students: state.students
  }
}

export default connect(mapStateToProps)(SingleCampus);
