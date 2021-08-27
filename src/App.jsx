import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Route } from "react-router-dom";

import { Body, Popup, Header, Test } from './components';
import { AppWrapper } from './styled/AppWrapper';

const App = () => {
  const [modalShow, setModalShow] = useState(false);
  const [dates, setDates] = useState( [] );
  const [currentTime, setCurrentTime] = useState( [] );

  useEffect(() => {
    fetch('https://demo5115615.mockable.io/dbnew')
      .then((resp) => resp.json())
      .then((json) => {
        setDates(json.dates);
      });
    
    const url = new URL(window.location.href);
    if (url.pathname === '/popup') {
        setModalShow(true);
    } 
  }, [])

  const handlerSelectCurrentTime = (item) => {
    setCurrentTime(item)
  }

  return (
    <AppWrapper>
      <Container>
        <Header />
        <Body
          dates={dates}
          handlerSelectCurrentTime={handlerSelectCurrentTime}
          onShow={() => setModalShow(true)}
        />
        <Route path="/popup" exact>
          <Popup
            time={currentTime}
            show={modalShow}
            onShow={()=>setModalShow(true)}
            onHide={() => setModalShow(false)}
          />
        </Route>
        <Route path="/test" exact>
          <Test/>
        </Route>
      </Container>
    </AppWrapper>
  );
}

export default App;