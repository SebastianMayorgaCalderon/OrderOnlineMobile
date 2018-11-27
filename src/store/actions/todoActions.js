import { ADD_TODO, DELETE_TODO, DESELECT_TODO, SELECT_TODO } from "./actionTypes";

export const addTodo = (text) => {
    return {
        type: ADD_TODO,
        playload: text
    }
};

export const deleteTodo = () => {
    return {
        type: DELETE_TODO
    }
}

export const selectTodo = (key) => {
    return {
        type: SELECT_TODO,
        key: key
    }
}
export const deselectTodo = () => {
    return {
        type: DESELECT_TODO
    }
}
