import { ADD_DISH_TO_ORDER, REMOVE_DISH_FROM_ORDER } from '../actions/orderActions/orderActionsType';
const initialState = {
    dishes:[],
}

const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_DISH_TO_ORDER:
            return {
                ...state,
                dishes: state.dishes.concat(action.payload)
            }
        case REMOVE_DISH_FROM_ORDER: {
            const array = [...state.dishes];
            for(var i = 0; i< state.dishes.length; i++) {
                if(array[i].id === action.payload){
                    array.splice(i,1);
                    break;
                }
            }
            return {
                ...state,
                dishes: array
            };
        }
        default:
            return state
    }
};
export default orderReducer;