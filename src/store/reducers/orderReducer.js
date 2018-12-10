import {
  ADD_DISH_TO_ORDER,
  REMOVE_DISH_FROM_ORDER
} from "../actions/orderActions/orderActionsType";
const initialState = {
  dishes: [],
  offers: [],
  combos: []
};

const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_DISH_TO_ORDER:
            if (!state.dishes.find(x => x.id === action.payload.id)) {
                const dishToAdd = {
                ...action.payload,
                amount: 1
                };
                return {
                    ...state,
                    dishes: state.dishes.concat(dishToAdd)
                };
            }
            const array = [...state.dishes];
            array.forEach((item)=>{
                if(action.payload.id=== item.id){
                    item.amount ++;
                }
            })
            return {
                ...state,
                dishes: array
            };
        case REMOVE_DISH_FROM_ORDER: {
            if (state.dishes.find(x => x.id === action.payload).amount === 1) {
                const dishToRemove = state.dishes.find(item => item.id === action.payload);
                const index = state.dishes.indexOf(dishToRemove);
                const array = [...state.dishes];
                if( index === 0 ){
                    array.shift();
                }else{
                    array.splice(index,1);
                }
                return {
                    ...state,
                    dishes: array
                }
            }
            const array = [...state.dishes];
            array.forEach((item)=>{
                if(action.payload=== item.id){
                    item.amount --;
                }
            })
            return {
                ...state,
                dishes: array
            };
        }
        default:
        return state;
    }
};
export default orderReducer;
