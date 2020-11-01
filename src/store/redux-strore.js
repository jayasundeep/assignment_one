// import thunk from 'redux-thunk';
import { createStore, combineReducers } from 'redux';

import statesReducer from '../reducers/states';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const storeCreator = () => {
    const store = createStore (
        combineReducers({
            states : statesReducer,
        })
        // compose(applyMiddleware(thunk))
    );
    // composeEnhancers(applyMiddleware(thunk))
    return store;
}

export default storeCreator;