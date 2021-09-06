import React from 'react'
import Post from './Post'

function FetchedPosts({ posts }) {
  if (!posts.length) {
   return <button className="btn btn-primary">Загрузить</button>
  } else {
    return posts.map((el, index) => <Post posts={posts} key={el + index}/>);
  }
  
}

export default FetchedPosts
