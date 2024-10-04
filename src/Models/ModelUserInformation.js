import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const ModelUserInformation = ({ show, handleClose, booking, handleSave }) => {
  const [editableBooking, setEditableBooking] = useState({});

  useEffect(() => {
    if (booking) {
      setEditableBooking(booking);
    }
  }, [booking]);

  if (!show) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditableBooking({
      ...editableBooking,
      [name]: value,
    });
  };

  const handleSaveClick = () => {
    handleSave(editableBooking);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Booking Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control 
              type="text" 
              name="name" 
              value={editableBooking.name || ''} 
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formContact">
            <Form.Label>Contact No.</Form.Label>
            <Form.Control 
              type="text" 
              name="contact" 
              value={editableBooking.contact || ''} 
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formIdProofName">
            <Form.Label>ID Proof Name</Form.Label>
            <Form.Control 
              type="text" 
              name="idProofName" 
              value={editableBooking.idProofName || ''} 
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formIdProofNo">
            <Form.Label>ID Proof No.</Form.Label>
            <Form.Control 
              type="text" 
              name="idProofNo" 
              value={editableBooking.idProofNo || ''} 
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formCheckInTime">
            <Form.Label>Check-In Time</Form.Label>
            <Form.Control 
              type="datetime-local"
              name="checkInTime" 
              value={editableBooking.checkInTime || ''} 
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formCheckOutTime">
            <Form.Label>Check-Out Time</Form.Label>
            <Form.Control 
              type="datetime-local" 
              name="checkOutTime" 
              value={editableBooking.checkOutTime || ''} 
              onChange={handleChange}
            />
          </Form.Group>
          {/* <Form.Group controlId="formDate">
            <Form.Label>Date</Form.Label>
            <Form.Control 
              type="date" 
              name="date" 
              value={editableBooking.date || ''} 
              onChange={handleChange}
            />
          </Form.Group> */}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Close</Button>
        <Button variant="primary" onClick={handleSaveClick}>Save</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModelUserInformation;
