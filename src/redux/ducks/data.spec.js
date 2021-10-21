import {
  GET_DATA,
  SET_CURRENT_DAY,
  SET_CURRENT_FILM,
  SET_CURRENT_SIT,
  dataReducer,
  initialState
} from './data.ts';

describe('dataReducer', () => {
  console.log(initialState)
  it('GET_DATA', () => {
    const action = {
      type: GET_DATA
    }
    expect(dataReducer(initialState, action)).toEqual({
      ...GET_DATA.data
    })
  })

  it('SET_CURRENT_DAY', () => {
    const action = {
      type: SET_CURRENT_DAY
    }
    expect(dataReducer(initialState, action)).toEqual({
      ...initialState,
      currentDay: SET_CURRENT_DAY.day
    })
  })

  it('SET_CURRENT_FILM', () => {
    const action = {
      type: SET_CURRENT_FILM
    }
    expect(dataReducer(initialState, action)).toEqual({
      ...initialState,
      currentFilm: SET_CURRENT_FILM.film
    })
  })

  it('SET_CURRENT_SIT', () => {
    const action = {
      type: SET_CURRENT_SIT
    }
    expect(dataReducer(initialState, action)).toEqual({
      ...SET_CURRENT_SIT.item
    })
  })
})
