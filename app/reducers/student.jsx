import axios from 'axios';

import { reformStudents } from './students';

//ACTIONS

export const FETCH_STUDENT = 'FETCH_STUDENT';
export const CHANGE_STUDENT = 'CHANGE_STUDENT';
export const UPDATED_STUDENT = 'UPDATED_STUDENT';

//ACTION CREATORS

export const fetchStudent = (student) => {
  return {
    type: FETCH_STUDENT,
    student
  }
}

export const changeStudent = (prop, value) => {
  return {
    type: CHANGE_STUDENT,
    prop,
    value
  }
}

export const updatedStudent = (student) => {
  return {
    type: UPDATED_STUDENT,
    student
  }
}

// REDUCERS

export default (student = {}, action) => {

  switch (action.type) {

    case FETCH_STUDENT:
      return action.student;

    case CHANGE_STUDENT:
      return Object.assign({}, student, { [action.prop]: action.value });

    case UPDATED_STUDENT:
      return Object.assign({}, action.student)

    default:
      return student;
  }
}

// THUNK CREATORS

export const getStudent = (studentId) => {
  return (dispatch) => {
    return axios.get(`/api/students/${studentId}`)
    .then(result => dispatch(fetchStudent(result.data)));
  }
}

export const updateStudent = (student) => {
  return (dispatch) => {
    return axios.put(`/api/students/${student.id}`, student)
    .then(result => {
      dispatch(updatedStudent(result.data))
      return result;
    })
    .then(result => {
      console.log('the result???', result);
      dispatch(reformStudents(result.data))
    })
  }
}
