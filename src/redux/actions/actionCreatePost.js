export const createPost = (post) => {
  return{
    type: 'CREATE_POST',
    payload: post
  }
  
}


export const showLoader = () => {
  return {
    type: 'SHOW_LOADER'
  }
}
export const hideLoader = () => {
  return {
    type: 'HIDE_LOADER'
  }
}


export const fetchPosts = () => {

  return async dispatch => {
    dispatch(showLoader())
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
    const json = await response.json()
    dispatch({
      type: 'FETCH_POSTS',
      payload: json
    })
    dispatch(hideLoader())
  }

}