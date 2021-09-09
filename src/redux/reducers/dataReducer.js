import { GET_DATA, REQUEST_DATA, SET_CURRENT_DAY, SET_CURRENT_FILM, SET_CURRENT_SIT } from '../types';

const initialState = {
  'date': 1,
  'dates': [],
  'getData': {
    'dates': []
  }
}

export const getData = () => {
  return {
    type: REQUEST_DATA
  }
}

export const actionSetCurrentDay = (day) => {
  return {
    type: SET_CURRENT_DAY,
    day
  }
}

export const actionReserve = (item) => {
  return {
    type: SET_CURRENT_SIT,
    item
  }
}

export const actionCurrentFilm = (film) => {
  return {
    type: SET_CURRENT_FILM,
    film
  }
}

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
      case GET_DATA:
        return {
          ...action.payload
        }
        case SET_CURRENT_DAY:
          return {
            ...state,
            currentDay: action.day
          }
          case SET_CURRENT_FILM:
            return {
              ...state,
              currentFilm: action.film
            }
            case SET_CURRENT_SIT:
              return {
                ...action.item
              }
              default:
                return state
  }
}

export default dataReducer;
