import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Route } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';

import { Body, Popup, Header } from './components';
import { AppWrapper } from './styled/AppWrapper';

import { getApiData } from './redux/store';

const App = () => {
  const [modalShow, setModalShow] = useState(false);
  const [currentTime, setCurrentTime] = useState([]);
  const urlGetData = 'https://demo5115615.mockable.io/dbnew';
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async (url) => {
      const response = await axios.get(url)
      dispatch(getApiData(response.data));
    }
    const url = new URL(window.location.href);
    if (url.pathname === '/popup') {
      setModalShow(true);
    }
    getData(urlGetData);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handlerSelectCurrentTime = (item) => {
    setCurrentTime(item)
  }

  return (
    <AppWrapper>
      <Container>
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
}

export default App;