import createSagaMiddleware from 'redux-saga';

import { createStore, applyMiddleware, compose } from 'redux';

// import loaderVisibility from '../middlewears/loaderVisibility';
import rootSaga from 'sagas';
import rootReducer from './reducers';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [
    sagaMiddleware,
    // loaderVisibility
];

/* eslint-disable no-underscore-dangle */
const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
              // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
          })
        : compose;
/* eslint-enable */
const enhancer = composeEnhancers(applyMiddleware(...middlewares));

const store = (initialState = {}) => {
    const storeIn = createStore(rootReducer, initialState, enhancer);

    sagaMiddleware.run(rootSaga);

    return storeIn;
};

export default store;
