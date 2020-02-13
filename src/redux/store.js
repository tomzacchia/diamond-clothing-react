import { createStore, applyMiddleware, compose } from 'redux';

import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './root-reducer';
import { fetchCollectionsStart } from './shop/shop.sagas';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

// https://github.com/zalmoxisus/redux-devtools-extension/issues/320
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

export const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(fetchCollectionsStart);

export const persistor = persistStore(store);

export default { store, persistor };
