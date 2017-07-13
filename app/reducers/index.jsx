import { combineReducers } from 'redux'
import students from './students';
import campuses from './campuses';


const reducers = combineReducers({
  students,
  campuses
})

export default reducers;

