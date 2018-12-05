import { ADD_DISH_TO_ORDER, REMOVE_DISH_FROM_ORDER }  from './orderActionsType';

export const addDish = (dish) =>{
    return {
        type: ADD_DISH_TO_ORDER,
        payload: dish
    }
}

export const removeDish = (id) => {
    return {
        type: REMOVE_DISH_FROM_ORDER,
        payload: id
    }
}