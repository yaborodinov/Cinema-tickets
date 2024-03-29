import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Route, useLocation, Switch } from 'react-router-dom';

import { Body, Popup, Header, Success } from './components';
import { AppWrapper } from './styled/AppWrapper';

const App = () => {
  const [modalShow, setModalShow] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number[]>([]);
  const location = useLocation();
  const handleSelectCurrentTime = (activeSit: number[]) => {
    setCurrentTime(activeSit)
  };
  
  useEffect(() => {
    if (location.pathname === '/popup') {
      setModalShow(true);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AppWrapper>
      <Container>
        <Switch>
          <Route path='/success/:currentDay/:film/:sit/:time' exact>
            <Success />
          </Route>
          <Route path="/">
            <Header />
            <Body
              onSelectCurrentTime={handleSelectCurrentTime}
              onShow={() => setModalShow(true)}
            />
          </Route>
        </Switch>
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
