import React from 'react';
import { Modal } from "react-bootstrap"

import { StyledButton } from "../../styled/components/popup/StyledPopup";

import ScreenImg from "../../images/cinemaScreen.png"

function Popup(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className="border-0">
        <Modal.Title id="contained-modal-title-vcenter" >
          Choose your favourite sits
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-flex flex-column justify-content-center">
        <img className="w-75 ms-auto me-auto" src={ScreenImg} alt="#"/>
        
      </Modal.Body>
      <Modal.Footer className="border-0">
        <StyledButton variant="outline-primary" onClick={props.onHide}>Reserve</StyledButton>
      </Modal.Footer>
    </Modal>
  );
}

export default Popup
