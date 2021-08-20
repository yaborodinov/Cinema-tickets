import React from "react";
import { Col, Row, Container } from "react-bootstrap";

import { Time, Title, FlexUl, Calendar,Popup } from "./components";
import  {AppWrapper}  from "./styled/AppWrapper";






function App() {
  const session = ["10:00", "12:00", "14:00", "16:00", "18:00", "20:00"]
  const [modalShow, setModalShow] = React.useState(false);

 
  return (
    <AppWrapper>
      <Container>
        <div className="d-flex border-bottom border-1 border-white justify-content-center">
          <Title> Booking Tickets </Title>
        </div>

        <Row className="align-items-center">
          <Col>
            <Calendar />
          </Col>
          <Col>
            <FlexUl className="d-flex flex-wrap justify-content-between  ms-sm-auto ms-md-0 me-sm-auto me-md-0 mt-sm-4  ps-sm-0 ps-md-4">
              {session.map((item, index) => (
                <Time key={`${item}_${index}`} margin="10px" time={item} onShow={() => setModalShow(true)} />
              ))}
            </FlexUl>
          </Col>
        </Row>
        

        <Popup
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </Container>
    </AppWrapper>
  );
}

export default App;
