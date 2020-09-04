import { combineReducers } from 'redux';
import courses from './courseReducer';
import authors from "./authorReducer";
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
        courses,   //short hand object assignment for courses:courses
        authors,
        apiCallsInProgress
    });

export default rootReducer


