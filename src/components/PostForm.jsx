import React, { useState } from 'react'
import { Form, Button } from "react-bootstrap";

function PostForm(props) {
  const [title, setTitle] = useState("rth");
  console.log(title);
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
    setTitle("")
  }
  
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
      <Button className="btn btn-success" type="submit">
        Создать
      </Button>
    </Form>
  );
}

export default PostForm
