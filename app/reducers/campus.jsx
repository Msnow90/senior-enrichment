import axios from 'axios';
import { updatedCampus } from './campuses';

// ACTIONS

export const RETRIEVE_CAMPUS = 'RETRIEVE_CAMPUS';
export const CHANGE_CAMPUS = 'CHANGE_CAMPUS';
export const REFORM_CAMPUS = 'REFORM_CAMPUS';


// ACTION CREATORS

export const retrievedCampus = (campus) => {
  return {
    type: RETRIEVE_CAMPUS,
    campus
  }
}

export const changeCampus = (propName, value) => {
  return {
    type: CHANGE_CAMPUS,
    propName,
    value
  }
}

export const reformCampus = (campus) => {
  return {
    type: REFORM_CAMPUS,
    campus
  }
}


// REDUCER

export default (campus = {}, action) => {
  switch (action.type) {

    case RETRIEVE_CAMPUS:
      return Object.assign({}, action.campus);

    case CHANGE_CAMPUS:
      return Object.assign({}, campus, {[action.propName]: action.value})

    case REFORM_CAMPUS:
      return Object.assign({}, action.campus);

    default:
      return campus;
  }
}

//THUNK CREATORS

export const getCampus = (campusId) => {
  return (dispatch) => {
    axios.get(`/api/campuses/${campusId}`)
    .then(result => dispatch(retrievedCampus(result.data)));
  }
}

export const updateCampus = (campus) => {
  return (dispatch) => {
   return axios.put(`/api/campuses/${campus.id}`, campus)
    .then(result => {
      dispatch(reformCampus(result.data));
      return result;
    })
    .then(result => dispatch(updatedCampus(result.data)));
  }
}
