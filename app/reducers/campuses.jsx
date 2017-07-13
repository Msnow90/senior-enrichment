import axios from 'axios';

// ACTIONS
export const GET_CAMPUSES = 'GET_CAMPUSES';
export const SUBMIT_CAMPUS = 'SUBMIT_CAMPUS';
export const DELETED_CAMPUS = 'DELETED_CAMPUS';


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

export const submitCampus = (campusName) => {
  return (dispatch) => {
    return axios.post('/api/campuses', {name: campusName})
    .then(result => result.data)
    .then(savedCampus => dispatch(retrievedCampus(savedCampus)));
  }
}

export const deleteCampus = (campusId) => {
  return (dispatch) => {
    return axios.delete(`/api/campuses/${campusId}`)
    .then(result => dispatch(removedCampus(result.data)))
  }
}
