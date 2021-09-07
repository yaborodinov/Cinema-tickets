import { showAlert } from '../actions/actionCreatePost';
import {CREATE_POST} from '../reducers/postsReducer'

const forbidden = ['pig', 'mood', 'spam'];


export function forbiddenWords({ dispatch }) {
  return function (next) {
    return function (action) {
      if (action.type === CREATE_POST) {
        const found = forbidden.filter(word => action.payload.title.includes(word))
        if (found.length) {
          return dispatch(showAlert("такие слова писать нельзя"))
        }
      }
      return next(action)
    }
  }
}