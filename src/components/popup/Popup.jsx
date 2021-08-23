import React, { useState } from "react";
import { Modal, Row, Col } from "react-bootstrap";

import { StyledButton, StyledSit, StyledHeader } from "../../styled/components/popup/StyledPopup";

import ScreenImg from "../../images/cinemaScreen.png"

function Popup(props) {
  const sits = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18"]
  const [isFree, setIsFree] = useState(true);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <StyledHeader closeButton className="border-0">
        <Modal.Title id="contained-modal-title-vcenter" className="mx-auto">
          Choose your favourite sits
        </Modal.Title>
      </StyledHeader>
      <Modal.Body className="d-flex flex-column justify-content-center">
        <img className="w-75 mx-auto" src={ScreenImg} alt="#" />
        <Row className="w-75 mx-auto" xs={6}>
          {sits.map((el, index) => (
            <Col
              className="d-flex justify-content-center mt-2"
              key={`${el}_${index}`}
            >
              <StyledSit className={isFree === true? "" : "active"}>
                {el}
              </StyledSit>
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
