import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
 
const Success = () => {
  let { currentDay, film, sit, time } = useParams();
  
  return (
    <Modal.Dialog>
      <Modal.Header closeButton>
        <Modal.Title>Ticket Booked Successfully!</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Date: {currentDay}</p>
        <p>Film: {film}</p>
        <p>Session: {time}</p>
        <p>Sit: {sit}</p>
      </Modal.Body>

      <Modal.Footer>
        <Link to='/'>
          <Button variant="secondary">Close</Button>
        </Link>
      </Modal.Footer>
    </Modal.Dialog>
  );
}

export default Success;
