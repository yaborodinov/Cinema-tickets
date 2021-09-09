import { combineReducers } from 'redux';
import dataReducer from './datarReducer';

import { loaderReducer } from './loaderReducer';

export const rootReducer = combineReducers({
  dataReducer: dataReducer,
  loaderReducer: loaderReducer
})
