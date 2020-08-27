import { combineReducers } from 'redux';
import courses from './courseReducer';


const rootReducer = combineReducers({
        courses   //short hand object assignment for courses:courses
    });

export default rootReducer


