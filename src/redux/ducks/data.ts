import { takeEvery, put, call } from 'redux-saga/effects';
import { fetchedData } from '../../api';
import { hideLoader, showLoader } from './loader';

export const GET_DATA = 'my-app/data/GET_DATA';
export const REQUEST_DATA = 'my-app/data/REQUEST_DATA';
export const SET_CURRENT_DAY = 'my-app/data/SET_CURRENT_DAY';
export const SET_CURRENT_FILM = 'my-app/data/SET_CURRENT_FILM';
export const SET_CURRENT_SIT = 'my-app/data/SET_CURRENT_SIT';


type InitialStateType = {
  'date': number
  'dates': Array<Object>
  'currentDay': number
  'getData': Object
  'currentFilm': string
}
type FetchDataType = {
  type: typeof REQUEST_DATA
}
type GetDataType = {
  type: typeof GET_DATA
  data: Object
}
type SetCurrentDayType = {
  type: typeof SET_CURRENT_DAY
  day: number
}
type ReserveType = {
  type: typeof SET_CURRENT_SIT
  item: string
}
type CurrentFilmType = {
  type: typeof SET_CURRENT_FILM
  film: string
}



const initialState: InitialStateType = {
  'date': 1,
  'dates': [
    {
      films: []
    }
  ],
  'currentDay': 1,
  'getData': {
    'dates': []
  },
  'currentFilm': ''
}

const dataReducer = (state = initialState, action: any): InitialStateType => {
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

export const fetchData = (): FetchDataType => {
  return {
    type: REQUEST_DATA
  }
}

export const getData = (data: any): GetDataType => {
  return {
    type: GET_DATA,
    data
  }
}

export const actionSetCurrentDay = (day: number): SetCurrentDayType => {
  return {
    type: SET_CURRENT_DAY,
    day
  }
}

export const actionReserve = (item: string): ReserveType => {
  return {
    type: SET_CURRENT_SIT,
    item
  }
}

export const actionCurrentFilm = (film: string): CurrentFilmType => {
  return {
    type: SET_CURRENT_FILM,
    film
  }
}

// saga

export function* sagaWatcher() {
  yield takeEvery(REQUEST_DATA, sagaWorker)
}


function* sagaWorker(): Generator {
  yield put(showLoader())
  const payload = yield call(fetchedData)
  yield put(getData(payload))
  yield put(hideLoader())
}

export default dataReducer;
