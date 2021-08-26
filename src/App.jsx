import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

import { Body, Popup, Header } from './components';
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
  }, [])
  const handlerSelectCurrentTime = (item) => {
    setCurrentTime(item)
  }
  return (
    <AppWrapper>
      <Container>
        <Header className="d-flex border-bottom border-1 border-white justify-content-center" />
        <Body
          dates={dates}
          handlerSelectCurrentTime={handlerSelectCurrentTime}
          onShow={() => setModalShow(true)}
        />
        <Popup
          time={currentTime}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </Container>
    </AppWrapper>
  );
}

export default App;