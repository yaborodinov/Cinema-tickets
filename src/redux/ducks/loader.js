export const SHOW_LOADER = 'my-app/loader/SHOW_LOADER';
export const HIDE_LOADER = 'my-app/loader/HIDE_LOADER';

const initialState = {
  loading: false
}

export const loaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOADER:
      return {
        ...state,
        loading: true
      }
      case HIDE_LOADER:
        return {
          ...state,
          loading: false
        }
        default:
          return state
  }
}

export const showLoader = () => {
  return {
    type: SHOW_LOADER,
  }
}

export const hideLoader = () => {
  return {
    type: HIDE_LOADER,
  }
}
