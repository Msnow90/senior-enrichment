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
    <div>
      <img src={campus.imgUrl} />
      <h1>{campus.name}</h1>
      {
        props.students.map(student => {
          if (student.campusId === campus.id) {
            return (
              <div>
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
