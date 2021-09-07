const initialState = {
  loading: false,
  alert: false
}
const SHOW_LOADER = 'SHOW_LOADER'
const HIDE_LOADER = 'HIDE_LOADER'
const SHOW_ALERT = 'SHOW_ALERT'
const HIDE_ALERT = 'HIDE_ALERT'

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
    case SHOW_ALERT:
      return {
        ...state,
        alert: true,
        text:action.payload
      }
    case HIDE_ALERT:
      return {
        ...state,
        alert:false
      }
    default:
      return state
  }
}