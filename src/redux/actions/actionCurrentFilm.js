import { SET_CURRENT_FILM } from '../types';

export const actionCurrentFilm = (film) => {
  return {
    type: SET_CURRENT_FILM,
    film
  }
}
