import { combineReducers } from 'redux';

import dataReducer from './ducks/data';
import { loaderReducer } from './ducks/loader.ts';

export const rootReducer = combineReducers({
  data: dataReducer,
  loader: loaderReducer
})
