import { combineReducers } from 'redux';
import dataReducer from './dataReducer';

import { loaderReducer } from './loaderReducer';

export const rootReducer = combineReducers({
  data: dataReducer,
  loader: loaderReducer
})
