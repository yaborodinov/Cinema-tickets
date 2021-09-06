import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Route } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';

import { Body, Popup, Header } from './components';
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
        <Row>
          <Col>
            <PostForm/>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>Синхронные посты</h2>
            <Posts posts={[1,2,3]}/>
          </Col>
          <Col>
            <h2>Асинхронные посты</h2>
            <FetchedPosts posts={ []}/>
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
