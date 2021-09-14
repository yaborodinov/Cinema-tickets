import {
  applyMiddleware,
  compose,
  createStore
} from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import { rootReducer } from './rootReducer';
import { sagaWatcher } from './ducks/data';

const saga = createSagaMiddleware()
const store = createStore(rootReducer, compose(applyMiddleware(
  thunk,
  saga
), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

saga.run(sagaWatcher)

export default store;
