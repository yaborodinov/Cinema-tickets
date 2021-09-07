import React from 'react'
import Post from './Post'
import { useDispatch, useSelector } from 'react-redux'
import {Loader} from './index'

import {fetchPosts} from '../redux/actions/actionCreatePost'

function FetchedPosts() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.postsReducer.fetchedPosts);
  const loading = useSelector((state) => state.appReducer.loading);
  if (loading) {
  return <Loader/>
}
  if (!posts.length) {
    return (
      <button className="btn btn-primary" onClick={() => dispatch(fetchPosts())}>
        Загрузить
      </button>
    );
  }
    return posts.map((el, index) => <Post key={el + index} title={el.title} />);
  
  
}

export default FetchedPosts
