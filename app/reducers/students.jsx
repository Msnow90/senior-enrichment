import axios from 'axios';

// ACTIONS
export const GET_STUDENTS = 'GET_STUDENTS';
export const CREATED_STUDENT = 'CREATED_STUDENT';
export const DELETED_STUDENT = 'DELETED_STUDENT';


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

    default:
      return students;
  }
};

export default rootReducer

// THUNK CREATORS
export const getStudents = () => {
  return (dispatch) => {
    return axios.get('/api/students')
    .then(res => res.data)
    .then(result => {
      dispatch(retrievedStudents(result))
    })
  }
}

export const submitStudent = (target) => {
  return (dispatch) => {
    return axios.post('/api/students', {name: target.studentName.value, campusId: target.campusId.value})
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
