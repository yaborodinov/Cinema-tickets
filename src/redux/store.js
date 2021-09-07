import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { forbiddenWords } from './middleware';
import { rootReducer } from './reducers/rootReducer';



const store = createStore(rootReducer, compose(
  applyMiddleware(
    thunk,
    forbiddenWords
), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

export default store;
