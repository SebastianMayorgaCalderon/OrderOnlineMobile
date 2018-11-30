import { createStore, combineReducers, compose } from 'redux';
import categoryReducer from './reducers/categoryReducer'

import reducer from './reducers/root';

const rootReducer = combineReducers({
    todo: reducer,
    categories: categoryReducer
});

let composeEnhancers = compose;

if (__DEV__) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureStore = () => {
    return createStore(rootReducer, composeEnhancers());
};

export default configureStore;