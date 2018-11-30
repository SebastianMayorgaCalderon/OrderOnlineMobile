import { CATEGORY_SELECT,ADD_ALL_CATEGORIES,DESELECT_CATEGORY } from "./categoryActionTypes";

export const selectCategory = (id) => {
    return {
        type: CATEGORY_SELECT,
        payload: id
    }
}
export const addAllCategory = (categories) => {
    return {
        type: ADD_ALL_CATEGORIES,
        data: categories
    }
}
export const deselectCategory = () => {
    return {
        type: DESELECT_CATEGORY
    }
}
