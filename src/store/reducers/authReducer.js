import {ADD_EMAIL} from '../actions/authActions/authActionTypes';
const initialState = {
    email: ''
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_EMAIL:
            return {
                ...state,
                email: action.data
            }
        default:
            return state
    }
};
export default authReducer;