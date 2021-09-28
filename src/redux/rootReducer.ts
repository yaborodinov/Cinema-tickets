import { combineReducers } from 'redux';

import dataReducer from './ducks/data';
import { loaderReducer } from './ducks/loader';

export const rootReducer = combineReducers({
  data: dataReducer,
  loader: loaderReducer
})

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>
