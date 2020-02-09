import { createStore, applyMiddleware, compose } from 'redux';

import { persistStore } from 'redux-persist';

import rootReducer from './root-reducer';

// optional: logger
const middlewares = [];

// https://github.com/zalmoxisus/redux-devtools-extension/issues/320
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

export const store = createStore(rootReducer, enhancer);

// create persisted version of our store
export const persistor = persistStore(store);

export default { store, persistor };
