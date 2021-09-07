
const initialState = {
  posts: [],
  fetchedPosts: []
}

export const CREATE_POST = 'CREATE_POST'
export const FETCH_POSTS = 'FETCH_POSTS'

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_POST:
      return {
        ...state,
        posts: state.posts.concat([action.payload])
      }
    case FETCH_POSTS:
      return {
        ...state,
        fetchedPosts: action.payload
      }
    default:
      return state
  }
}
