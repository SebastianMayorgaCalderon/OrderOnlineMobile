import { ADD_ALL_DISHES, SELECT_DISH, DESELECT_DISH, SET_ERROR_MESSAGE, LOADING_DISHES } from './dishesActionTypes';

export const addAllDishes = (dishes) => {
    return {
        type: ADD_ALL_DISHES,
        payload: dishes
    }
}
export const selectDish = (id) => {
    return {
        type: SELECT_DISH,
        payload: id
    }
}
export const deselectDish = () => {
    return {
        type: DESELECT_DISH
    }
}
export const setErrorMessage = ( msj ) => {
    return {
        type:SET_ERROR_MESSAGE,
        payload: msj 
    }
}
export const setLoading = (value) => {
    return {
        type: LOADING_DISHES,
        payload: value
    }
}