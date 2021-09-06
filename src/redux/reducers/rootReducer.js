import { combineReducers } from "redux";
import { postsReducer } from "./postsReducer";
import { reducer } from "./reducer";

export const rootReducer = combineReducers({
  reducer: reducer,
  postsReducer: postsReducer

})