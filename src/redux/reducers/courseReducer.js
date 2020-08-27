import * as types from "../actions/actionTypes";
export default function courseReducer (state = [] , action) { // default argument syntax used here for state.so if no initial state is there, an empty array will be considered as the initial state

    switch (action.type) {
        case types.CREATE_COURSE:
            return [...state, {...action.course}];
        default:
            return state;

    }


}