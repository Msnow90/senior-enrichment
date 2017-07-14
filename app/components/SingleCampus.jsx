import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const SingleCampus = (props) => {

  const campusId = props.match.params.campusId;

  const campus = (props.campuses.length) ? props.campuses.filter(campus => {
          return (campus.id === +campusId)
        })[0] : {name: '', imgUrl: ''};

  console.log('stuff')
  return (
    <div className="container text-align single-student-form">
      <img className="single-campus-img" src={campus.imgUrl} />
      <h1>{campus.name}</h1>
      <h3>Campus Bio:</h3>
      <p>{campus.bio}</p>
      <Link to={`/campuses/${campus.id}/update`}>
        <button className="btn btn-md btn-success">Update Campus</button>
      </Link>
      {
        props.students.map(student => {
          if (student.campusId === campus.id) {
            return (
              <div key={student.id}>
                <h3>Student Name:</h3>
                <Link to={`/students/${student.id}`}><p>{student.name}</p></Link>
              </div>
            )
          }
        })
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    campuses: state.campuses,
    students: state.students
  }
}

export default connect(mapStateToProps)(SingleCampus);
