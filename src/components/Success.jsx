import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Modal, Button, Row, Col } from 'react-bootstrap';

import { StyledSuccess } from '../styled/components/StyledSuccess';
 
const Success = () => {
  let { currentDay, film, sit, time } = useParams();
  
  return (
    <StyledSuccess>
      <Modal.Header className="justify-content-center">
        <Modal.Title className="d-flex align-items-center ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="green"
            className="bi bi-check-circle-fill"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75
             0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97
             11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
          </svg>
          <span className="ms-4 ms-sm-2">Ticket Booked Successfully!</span>
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className="ps-md-5">
        <Row>
          <Col xs={4} md={3}>
            <p className="opacity-80">Date:</p>
          </Col>
          <Col xs={8} md={9}>
            <p>{currentDay}</p>
          </Col>
        </Row>
        <Row>
          <Col xs={4} md={3}>
            <p className="opacity-80">Film:</p>
          </Col>
          <Col xs={8} md={9}>
            <p>{film}</p>
          </Col>
        </Row>
        <Row>
          <Col xs={4} md={3}>
            <p className="opacity-80">Session:</p>
          </Col>
          <Col xs={8} md={9}>
            <p>{time}</p>
          </Col>
        </Row>
        <Row>
          <Col xs={4} md={3}>
            <p className="opacity-80">Sit:</p>
          </Col>
          <Col xs={8} md={9}>
            <p>{sit}</p>
          </Col>
        </Row>
      </Modal.Body>

      <Modal.Footer>
        <Link to="/">
          <Button variant="success">OK</Button>
        </Link>
      </Modal.Footer>
    </StyledSuccess>
  );
}

export default Success;
