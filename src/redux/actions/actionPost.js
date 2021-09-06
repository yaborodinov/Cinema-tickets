export const actionPost = (post) => {
  return{
    type: 'CREATE_POST',
    payload: post
  }
  
}