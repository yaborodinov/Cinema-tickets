import React from 'react'

import Post from './Post'

function Posts({posts}) {
  return posts.map(post => (
    <Post post={post} id={post}/>
  ))
}

export default Posts
