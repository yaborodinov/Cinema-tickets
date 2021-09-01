import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Route } from 'react-router-dom';

import { Body, Popup, Header } from './components';
import { AppWrapper } from './styled/AppWrapper';

// import { pullData } from './api';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import {getApiData} from "./redux/store"

const App = () => {
  const [modalShow, setModalShow] = useState(false);
  const [dates, setDates] = useState( [] );
  const [currentTime, setCurrentTime] = useState( [] );
  const dispatch = useDispatch()
  console.log(currentTime);
  useEffect(() => {
    // axios
    //   .get("https://demo5115615.mockable.io/dbnew")
    //   .then(({ data }) => setDates(data.dates));
    const getData = async () => {
      const response = await axios.get("https://demo5115615.mockable.io/dbnew")
      dispatch(getApiData(response.data));
    }
    const url = new URL(window.location.href);
    if (url.pathname === '/popup') {
      setModalShow(true);
    }
    getData()
  }, [])

  console.log(dates);
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