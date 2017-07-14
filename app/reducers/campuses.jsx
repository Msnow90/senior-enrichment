import axios from 'axios';

import { getStudents } from './students';

// ACTIONS
export const GET_CAMPUSES = 'GET_CAMPUSES';
export const SUBMIT_CAMPUS = 'SUBMIT_CAMPUS';
export const DELETED_CAMPUS = 'DELETED_CAMPUS';
export const UPDATED_CAMPUS = 'UPDATED_CAMPUS';


// ACTION CREATORS
export const retrievedCampuses = (campuses) => {
  return {
    type: GET_CAMPUSES,
    campuses
  }
}

export const retrievedCampus = (campus) => {
  return {
    type: SUBMIT_CAMPUS,
    campus
  }
}

export const removedCampus = (campusId) => {
  return {
    type: DELETED_CAMPUS,
    campusId
  }
}

export const updatedCampus = (campus) => {
  return {
    type: UPDATED_CAMPUS,
    campus
  }
}

// REDUCER
const campuses = [];

export default (campuses = [], action) => {

  switch (action.type) {

    case GET_CAMPUSES:
      return action.campuses

    case SUBMIT_CAMPUS:
      return [...campuses, action.campus]

    case DELETED_CAMPUS:
      return campuses.filter(campus => {
        return campus.id !== action.campusId
      })

    case UPDATED_CAMPUS:
      return campuses.map(campus => {
        if (campus.id === action.campus.id) return Object.assign({}, action.campus);
        return campus;
      })

    default:
      return campuses;
  }
}


// THUNK CREATORS
export const getCampuses = () => {
  return (dispatch) => {
    return axios.get('/api/campuses')
    .then((result) => result.data)
    .then(campuses => {
      dispatch(retrievedCampuses(campuses))
    })
  }
}

export const submitCampus = (target) => {
  return (dispatch) => {
    return axios.post('/api/campuses', {name: target.campusName.value, bio: target.bio.value})
    .then(result => result.data)
    .then(savedCampus => dispatch(retrievedCampus(savedCampus)));
  }
}

export const deleteCampus = (campusId) => {
  return (dispatch) => {
    return axios.delete(`/api/campuses/${campusId}`)
    .then(result => {
      console.log(result.data);
      dispatch(removedCampus(result.data));
      dispatch(getStudents());
    })
  }
}

// export const updateCampus = (campus) => {
//   return (dispatch) => {
//     return axios.put(`/api/campuses/${campus.id}`)
//     .then(result => dispatch(updatedCampus(result.data)))
//   }
// }
