import { ADD_TODO, DELETE_TODO, DESELECT_TODO, SELECT_TODO } from '../actions/actionTypes';
const initialstate = {
    todo: [],
    selectedTodo: null
}
const reducer = (state = initialstate, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todo: state.todo.concat({
                    key: Math.random(),
                    text: action.playload
                })
            }
        case DELETE_TODO:
            return {
                ...state,
                todo: state.todo.filter((todo) => todo.key !== state.selectedTodo.key),
                selectedTodo: null
            }
        case SELECT_TODO:
            return {
                ...state,
                selectedTodo: state.todo.find(todo => todo.key === action.key)
            }
        case DELETE_TODO:
            return {
                ...state,
                selectedTodo: null
            }
        default:
            return state
    }
};

export default reducer;