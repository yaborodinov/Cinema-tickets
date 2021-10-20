import {
  loaderReducer,
  SHOW_LOADER,
  HIDE_LOADER,
  initialState
} from './loader.ts';

describe('loaderReducers', () => {
  console.log(loaderReducer);
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
