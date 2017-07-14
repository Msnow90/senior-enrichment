import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const SingleCampus = (props) => {

  const studentId = props.match.params.studentId;

  const student = (props.students.length) ? props.students.filter(student => {
          return (student.id === +studentId)
        })[0] : {name: '', campusId: ''};

  return (
    <div className="container text-align single-student-form">
      <Link to={`/campuses/${student.campusId}`}>
      <button className="btn btn-lg btn-primary">Go To Campus</button>
      </Link>
      <h1>Student Name:</h1>
      <h1>{student.name}</h1>
      <h3>Student Bio: </h3>
      <p>{student.bio}</p>
      <Link to={`/students/${student.id}/update`}><button className="btn btn-md btn-success">Update Student Info</button></Link>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    students: state.students
  }
}

export default connect(mapStateToProps)(SingleCampus);
