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
    const stateBefore = {
      dates: [1, 12, 3],
      currentDay: 112
    }
    const action = {
      type: SET_CURRENT_DAY
    }
    expect(dataReducer(stateBefore, action)).toEqual({
      ...stateBefore,
      currentDay: SET_CURRENT_DAY.day
    })
  })

  it('SET_CURRENT_FILM', () => {
    const stateBefore = {
      dates: [1, 12, 3],
      currentDay: 112
    }
    const action = {
      type: SET_CURRENT_FILM
    }
    expect(dataReducer(stateBefore, action)).toEqual({
      ...stateBefore,
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
