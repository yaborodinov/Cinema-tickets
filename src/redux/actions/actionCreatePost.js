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
export const showAlert = (text) => {
  return dispatch => {
    dispatch({
      type: 'SHOW_ALERT',
      payload: text
    })
    setTimeout(() => {
      dispatch(hideAlert())
    }, 3000)
  }
}
export const hideAlert = () => {
  return {
    type: 'HIDE_ALERT'
  }
}



export const fetchPosts = () => {
   return {
     type: "REQUEST_POSTS"

   }
  // return async dispatch => {
  //   try {
  //     dispatch(showLoader())
  //   const response = await fetch('htps://jsonplaceholder.typicode.com/posts?_limit=5');
  //   const json = await response.json()
  //   dispatch({
  //     type: 'FETCH_POSTS',
  //     payload: json
  //   })
  //   dispatch(hideLoader())
  //   } catch (e) {
  //     dispatch(showAlert("чтото пошло не так"))
  //     dispatch(hideLoader())
  //   }
    
  // }

}