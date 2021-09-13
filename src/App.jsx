import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Route, useLocation } from 'react-router-dom';

import { Body, Popup, Header } from './components';
import { AppWrapper } from './styled/AppWrapper';

const App = () => {
  const [modalShow, setModalShow] = useState(false);
  const [currentTime, setCurrentTime] = useState([]);
  const location = useLocation();
  const handlerSelectCurrentTime = (item) => {
    setCurrentTime(item)
  };
  
  useEffect(() => {
    if (location.pathname === "/popup") {
      setModalShow(true);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AppWrapper>
      <Container>
        <Header />
        <Body
          handlerSelectCurrentTime={handlerSelectCurrentTime}
          onShow={() => setModalShow(true)}
        />
        <Route path='/popup' exact>
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
