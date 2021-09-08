import { hideLoader, showLoader } from "../actions/actionLoader";



const initialState = {
  'date': 1,
  'dates': [],
  'getData': {
    'dates': []
  }
}

export const getData = () => {
  return async dispatch => {
    dispatch(showLoader())
    const response = await fetch('https://demo5115615.mockable.io/dbnew');
    const json = await response.json()
    dispatch({
      type: 'GET_DATA',
      payload: json
    })
    dispatch(hideLoader())
  }
}


export const getApiData = (data) => {
  return {
    type: 'GET_API_DATA',
    data
  }
}

export const actionSetCurrentDay = (day) => {
  return {
    type: 'SET_CURRENT_DAY',
    day
  }
}

export const actionReserve = (item) => {
  return {
    type: 'SET_CURRENT_SIT',
    item
  }
}

export const actionCurrentFilm = (film) => {
  return {
    type: 'SET_CURRENT_FILM',
    film
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_API_DATA':
      return {
        ...action.data
      }
      case 'GET_DATA':
        return {
          ...action.payload
        }
        case 'SET_CURRENT_DAY':
          return {
            ...state,
            currentDay: action.day
          }
          case 'SET_CURRENT_FILM':
            return {
              ...state,
              currentFilm: action.film
            }
            case 'SET_CURRENT_SIT':
              return {
                ...action.item
              }
              default:
                return state
  }
}

export default reducer;