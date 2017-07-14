import axios from 'axios';

// ACTIONS
export const GET_STUDENTS = 'GET_STUDENTS';
export const CREATED_STUDENT = 'CREATED_STUDENT';
export const DELETED_STUDENT = 'DELETED_STUDENT';
export const REFORM_STUDENTS = 'REFORM_STUDENTS';


// ACTION CREATORS
export const retrievedStudents = (students) => {
  return {
    type: 'GET_STUDENTS',
    students
  }
}

export const createdStudent = (student) => {
  return {
    type: 'CREATED_STUDENT',
    student
  }
}

export const deletedStudent = (studentId) => {
  return {
    type: 'DELETED_STUDENT',
    studentId
  }
}

export const reformStudents = (student) => {
  return {
    type: 'REFORM_STUDENTS',
    student
  }
}

// INITIAL STATE
const students = [];

// REDUCER
const rootReducer = function(students = [], action) {

  switch (action.type) {

    case GET_STUDENTS:
      return action.students;

    case CREATED_STUDENT:
      return [...students, action.student];

    case DELETED_STUDENT:
      return students.filter(student => {
        return student.id !== +action.studentId;
      })

    case REFORM_STUDENTS:
      const test =  [...students].map(student => {
        // this map function doesn't alter the student that gets returned,
        // need to reconfigure to not mutate original state and change student
        if (student.id === +action.student.id) return Object.assign({}, action.student);
        return student;
      })
      console.log('test', test);
      return test;

    default:
      return students;
  }
};

export default rootReducer

// THUNK CREATORS
export const getStudents = () => {
  return (dispatch) => {
    return axios.get('/api/students')
    .then(result => {
      dispatch(retrievedStudents(result.data))
    })
  }
}

export const submitStudent = (target) => {
  return (dispatch) => {
    return axios.post('/api/students', {name: target.studentName.value, campusId: target.campusId.value,
    bio: target.bio.value})
    .then(res => res.data)
    .then(result => dispatch(createdStudent(result)))
  }
}

export const removeStudent = (studentId) => {
  //studentId = studentId.toString();
  return (dispatch) => {
    return axios.delete(`/api/students/${studentId}`)
    .then(res => res.data)
    .then(result => dispatch(deletedStudent(result)));
  }
}
