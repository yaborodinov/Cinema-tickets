import React from 'react'
import { useSelector } from 'react-redux'


import Post from './Post'


function Posts() {
  const statePosts = useSelector(state => state.postsReducer)
  console.log(statePosts.posts)
  
  if (!statePosts.posts.length) {
    return <p className="text-center">Постов пока нет</p>;
  
  } else {  
      return statePosts.posts.map((el, index) => (
        <Post post={el} key={el.id} />
      ));
  }
  
}



export default Posts
