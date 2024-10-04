import React from 'react';
import { Modal, Button, ListGroup } from 'react-bootstrap';

const ModelQuickLinks = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Quick Links</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup>
          <ListGroup.Item action href="/room-booking">Room Booking</ListGroup.Item>
          <ListGroup.Item action href="#check-in-out">Check-In/Check-Out</ListGroup.Item>
          <ListGroup.Item action href="#housekeeping">Housekeeping Requests</ListGroup.Item>
          <ListGroup.Item action href="#restaurant-reservations">Restaurant Reservations</ListGroup.Item>
          <ListGroup.Item action href="#reports">Reports</ListGroup.Item>
          <ListGroup.Item action href="/feedback-reviews">Feedback and Reviews</ListGroup.Item>
          <ListGroup.Item action href="/emergency-contacts">Emergency Contacts</ListGroup.Item>
        </ListGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModelQuickLinks;
