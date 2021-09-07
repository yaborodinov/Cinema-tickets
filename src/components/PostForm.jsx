import React, { useState } from 'react'
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { createPost, showAlert } from "../redux/actions/actionCreatePost";

function PostForm() {
  const [title, setTitle] = useState('');
  const inputHandler = (event) => {
    setTitle(event.target.value);
  }
  const submitHandler = (e) => {
    e.preventDefault()
    const titlePost = { title }
    
    const newPost = {
      title: titlePost.title,
      id: Date.now().toString()
    };
    if (!title.trim()) {
      return dispatch(showAlert("вы ничего не ввели"));
    }
    dispatch(createPost(newPost));
    setTitle('')
  }
  
  const dispatch = useDispatch();
  
  return (
    <Form onSubmit={submitHandler}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Заголовок поста</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your post"
          value={title}
          onChange={inputHandler}
        />
      </Form.Group>
      <Button
        className="btn btn-success"
        type="submit"
      >
        Создать
      </Button>
    </Form>
  );
}

export default PostForm
