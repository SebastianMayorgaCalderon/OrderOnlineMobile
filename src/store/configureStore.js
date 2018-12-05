import { createStore, combineReducers, compose } from 'redux';
import categoryReducer from './reducers/categoryReducer'
import authReducer from './reducers/authReducer';
import dishReducer from './reducers/dishesReducer';
import orderReducer from './reducers/orderReducer';

const rootReducer = combineReducers({
    categories: categoryReducer,
    auth: authReducer,
    dishes: dishReducer,
    order: orderReducer
});

let composeEnhancers = compose;

if (__DEV__) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureStore = () => {
    return createStore(rootReducer, composeEnhancers());
};

export default configureStore;