import React from 'react'
import { useSelector } from 'react-redux'


import Post from './Post'


function Posts() {
  const statePosts = useSelector(state => state.postsReducer)
  
  
  if (!statePosts.posts.length) {
    return <p className="text-center">Постов пока нет</p>;
  
  } else {  
      return statePosts.posts.map((el) => (
        <Post title={el.title} key={el.id} />
      ));
  }
  
}



export default Posts
