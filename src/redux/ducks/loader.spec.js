import {
  loaderReducer,
  SHOW_LOADER,
  HIDE_LOADER,
  showLoader,
  hideLoader,
  initialState
} from './loader.ts';

describe('loaderReducers', () => {
  it('SHOW_LOADER', () => {
    const action = {
      type: SHOW_LOADER
    }
    expect(loaderReducer(initialState, action)).toEqual({
      ...initialState,
      loading: true
    })
  })

  it('HIDE_LOADER', () => {
    const action = {
      type: HIDE_LOADER
    }
    expect(loaderReducer(initialState, action)).toEqual({
      ...initialState,
      loading: false
    })
  })
})

describe('loaderActions', () => {
  it('showLoader', () => {
    expect(showLoader()).toEqual({
      type: SHOW_LOADER
    })
  })

  it('hideLoader', () => {
    expect(hideLoader()).toEqual({
      type: HIDE_LOADER
    })
  })
})
