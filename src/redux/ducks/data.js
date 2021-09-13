export const GET_DATA = 'my-app/data/GET_DATA';
export const REQUEST_DATA = 'my-app/data/REQUEST_DATA';
export const SET_CURRENT_DAY = 'my-app/data/SET_CURRENT_DAY';
export const SET_CURRENT_FILM = 'my-app/data/SET_CURRENT_FILM';
export const SET_CURRENT_SIT = 'my-app/data/SET_CURRENT_SIT';

const initialState = {
  'date': 1,
  'dates': [],
  'getData': {
    'dates': []
  }
}

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return {
        ...action.data
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



export const fetchData = () => {
  return {
    type: REQUEST_DATA
  }
}

export const getData = (data) => {
  return {
    type: GET_DATA,
    data
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

export default dataReducer;
