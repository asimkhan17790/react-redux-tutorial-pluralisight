import { combineReducers } from 'redux';
import courses from './courseReducer';
import authors from "./authorReducer";

const rootReducer = combineReducers({
        courses,   //short hand object assignment for courses:courses
        authors
    });

export default rootReducer


