import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { forbiddenWords } from './middleware';
import { rootReducer } from './reducers/rootReducer';
import createSagaMiddleware from 'redux-saga';
import { sagaWatcher } from './sagas';


const saga = createSagaMiddleware()

const store = createStore(rootReducer, compose(
  applyMiddleware(
    thunk,
    forbiddenWords,
    saga
), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

saga.run(sagaWatcher)

export default store;
