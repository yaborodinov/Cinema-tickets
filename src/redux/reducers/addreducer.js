const initialState = {
  loading:false
}
const SHOW_LOADER = 'SHOW_LOADER'
const HIDE_LOADER = 'HIDE_LOADER'

export const appReducer = (state=initialState, action) => {
  switch (action.type) {
    case SHOW_LOADER:
      return {
        ...state,
        loading:true
      }
    case HIDE_LOADER:
      return {
        ...state,
        loading:false
      }
    default:
      return state
  }
}