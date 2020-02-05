import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger];

// pass middleware arrays into applyMiddlewares
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
