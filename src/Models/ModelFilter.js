import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

const Booking = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Booking
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Room No 1</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formFullName">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter full name"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="name@example.com"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGuestNumber">
                            <Form.Label>Select Number Of Guests</Form.Label>
                            <Form.Control as="select">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formOtherInfo">
                            <Form.Label>Other Information</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Booking;
