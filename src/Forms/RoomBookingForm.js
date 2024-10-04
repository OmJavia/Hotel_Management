import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

const ModelBooking = ({ show, handleClose, room }) => {
  const [checkInTime, setCheckInTime] = useState('');

  const handleSave = () => {
    console.log('Booking saved:', {
      room: room.number,
      checkInTime,
    });
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Booking Room No {room?.number}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formFullName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" placeholder="Enter full name" autoFocus />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGuestNumber">
            <Form.Label>Select Number Of Guests</Form.Label>
            <Form.Control as="select">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formCheckInTime">
            <Form.Label>Check-In Time</Form.Label>
            <Form.Control
              type="datetime-local"
              value={checkInTime}
              onChange={(e) => setCheckInTime(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formCheckOutTime">
            <Form.Label>Check-Out Time</Form.Label>
            <Form.Control type="datetime-local" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Save Booking
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModelBooking;
