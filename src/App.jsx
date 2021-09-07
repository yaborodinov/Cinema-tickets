import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Route } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";

import { Body, Popup, Header,AlertMessage } from './components';
import { AppWrapper } from './styled/AppWrapper';
import PostForm from './components/PostForm';
import Posts from "./components/Posts";
import FetchedPosts from "./components/FetchedPosts";

import { getApiData } from './redux/actions/getApiData';

const App = () => {
  const [modalShow, setModalShow] = useState(false);
  const [currentTime, setCurrentTime] = useState([]);
  const urlGetData = 'https://demo5115615.mockable.io/dbnew';
  const dispatch = useDispatch();

  const getData = async (url) => {
    const response = await axios.get(url)
    dispatch(getApiData(response.data));
  };

  const handlerSelectCurrentTime = (item) => {
    setCurrentTime(item)
  };
  const alert = useSelector((state) => state.appReducer.alert);
  const alertText = useSelector((state) => state.appReducer.text);
  
  useEffect(() => {
    getData(urlGetData);

    const url = new URL(window.location.href);
    if (url.pathname === '/popup') {
    setModalShow(true);
  };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AppWrapper>
      <Container>
        {alert && <AlertMessage variant={"danger"} text={alertText} />}
        <Row>
          <Col>
            <PostForm />
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>Синхронные посты</h2>
            <Posts />
          </Col>
          <Col>
            <h2>Асинхронные посты</h2>
            <FetchedPosts />
          </Col>
        </Row>
        <Header />
        <Body
          handlerSelectCurrentTime={handlerSelectCurrentTime}
          onShow={() => setModalShow(true)}
        />
        <Route path="/popup" exact>
          <Popup
            time={currentTime}
            show={modalShow}
            onShow={() => setModalShow(true)}
            onHide={() => setModalShow(false)}
          />
        </Route>
      </Container>
    </AppWrapper>
  );
};

export default App;
