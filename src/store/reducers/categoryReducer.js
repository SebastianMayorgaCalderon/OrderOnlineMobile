import { CATEGORY_SELECT, ADD_ALL_CATEGORIES,DESELECT_CATEGORY } from '../actions/actionsCategory/categoryActionTypes';
const initialstate = {
    list: [],
    selectedCategory: null
}
const categoryReducer = (state = initialstate, action) => {
    switch (action.type) {
        case CATEGORY_SELECT:
            return {
                ...state,
                selectedCategory: state.categories.find(item=>item.id===action.pLayload)
            }
        case ADD_ALL_CATEGORIES:
            return {
                ...state,
                list: action.data
            }
        case DESELECT_CATEGORY:
            return {
                ...state,
                selectedCategory: null
            }
        default:
            return state
    }
};
export default categoryReducer;