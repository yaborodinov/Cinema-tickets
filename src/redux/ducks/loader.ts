export const SHOW_LOADER = 'my-app/loader/SHOW_LOADER';
export const HIDE_LOADER = 'my-app/loader/HIDE_LOADER';

type InitialStateType = {
  loading: boolean
}
type ShowLoaderType = {
  type: typeof SHOW_LOADER
}
type HideLoaderType = {
  type: typeof HIDE_LOADER
}

const initialState: InitialStateType = {
  loading: false
}

export const loaderReducer = (state = initialState, action: any): InitialStateType => {
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

export const showLoader = (): ShowLoaderType => {
  return {
    type: SHOW_LOADER
  }
}

export const hideLoader = (): HideLoaderType => {
  return {
    type: HIDE_LOADER
  }
}
