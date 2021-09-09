import { SET_CURRENT_SIT } from '../types';

export const actionReserve = (item) => {
  return {
    type: SET_CURRENT_SIT,
    item
  }
}
