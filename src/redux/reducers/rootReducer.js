import { combineReducers } from "redux";
import { appReducer } from "./addreducer";
import { postsReducer } from "./postsReducer";
import { reducer } from "./reducer";

export const rootReducer = combineReducers({
  reducer: reducer,
  postsReducer: postsReducer,
  appReducer: appReducer

})