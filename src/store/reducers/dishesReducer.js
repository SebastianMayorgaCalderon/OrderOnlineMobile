import { ADD_ALL_DISHES, SELECT_DISH, DESELECT_DISH, SET_ERROR_MESSAGE, LOADING_DISHES } from '../actions/dishesActions/dishesActionTypes';
const initialState = {
    list: null,
    selectedDish: null,
    errorMessage : null,
    loading: false
}

const dishReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ALL_DISHES:
            return {
                ...state,
                list: action.payload
            }
        case SELECT_DISH:
            return {
                ...state,
                selectedDish: state.list.find(item=> item.id === action.payload)
            }
        case DESELECT_DISH:
            return {
                ...state,
                selectedDish: null
            }
        case SET_ERROR_MESSAGE:
            return {
                ...state,
                errorMessage: action.payload
            }
        case LOADING_DISHES:
            return {
                ...state,
                loading: action.payload
            }
        default:
            return state
    }
};
export default dishReducer;