import {
  applyMiddleware,
  compose,
  createStore
} from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import { rootReducer } from './reducers/rootReducer';
import { sagaWatcher } from './sagas';

const saga = createSagaMiddleware()
const store = createStore(rootReducer, compose(applyMiddleware(
  thunk,
  saga
), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

saga.run(sagaWatcher)

export default store;
