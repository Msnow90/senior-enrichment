import { combineReducers } from 'redux'
import students from './students';
import campuses from './campuses';
import student from './student';
import campus from './campus';


const reducers = combineReducers({
  students,
  campuses,
  student,
  campus
})

export default reducers;

