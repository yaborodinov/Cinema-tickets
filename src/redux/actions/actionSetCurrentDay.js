import { SET_CURRENT_DAY } from '../types';

export const actionSetCurrentDay = (day) => {
  return {
    type: SET_CURRENT_DAY,
    day
  }
}
