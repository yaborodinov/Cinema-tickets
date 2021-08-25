import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

import { Title, Calendar,Popup } from "./components";
import { AppWrapper } from "./styled/AppWrapper";

const App = () => {
  const [modalShow, setModalShow] = useState(false);
  const [dates, setDates] = useState( [] );
  const [currentTime, setCurrentTime] = useState( [] );
  
  useEffect(() => {
    fetch("https://demo5115615.mockable.io/test")
      .then((resp) => resp.json())
      .then(json => {
        setDates(json.dates);  
      });
  }, [])

  const handlerSelectCurrentTime = (item) => {
    setCurrentTime(item)
  }
  return (
    <AppWrapper>
      <Container>
        <div className="d-flex border-bottom border-1 border-white justify-content-center">
          <Title> Booking Tickets </Title>
        </div>
            <Calendar
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