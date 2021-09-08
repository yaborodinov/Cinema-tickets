import { combineReducers } from 'redux';
import reducer from './reducer';
import { appReducer } from './appReducer';

export const rootReducer = combineReducers({
  reducer: reducer,
  appReducer: appReducer
})
