import React from "react";
import { Modal, Row, Col } from "react-bootstrap";

import { StyledButton, StyledSit, StyledHeader } from "../../styled/components/popup/StyledPopup";

import ScreenImg from "../../images/cinemaScreen.png";

function Popup(props) {
  const info = {
    time: props.time[0],
    activeSit: props.time[1] ? Object.values(props.time[1]) : [] ,
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <StyledHeader closeButton className="border-0">
        <Modal.Title id="contained-modal-title-vcenter" className="mx-auto">
          {`Choose your favourite sits at ${info.time}`}
        </Modal.Title>
      </StyledHeader>
      <Modal.Body className="d-flex flex-column justify-content-center">
        <img className="w-75 mx-auto" src={ScreenImg} alt="#" />
        <Row className="w-75 mx-auto" xs={6}>
          {info.activeSit.map((el, index) => (
            <Col
              className="d-flex justify-content-center mt-2"
              key={`${el}_${index}`}
            >
              <StyledSit className={el ? "" : "active"}>{index+1}</StyledSit>
            </Col>
          ))}
        </Row>
      </Modal.Body>
      <Modal.Footer className="border-0">
        <StyledButton variant="outline-primary" onClick={props.onHide}>
          Reserve
        </StyledButton>
      </Modal.Footer>
    </Modal>
  );
}

export default Popup
