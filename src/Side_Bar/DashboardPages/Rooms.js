import React, { useState } from 'react';
import { Container, Row, Col, Card, DropdownButton, Dropdown, Button, Modal } from 'react-bootstrap';
import ModelBooking from '../../Forms/RoomBookingForm';
import './Rooms.css';
import UserTableCheckInOut from './UserTableCheck-in-out';

const Rooms = () => {
  const totalRooms = 100;
  const bookedRooms = 40;
  const availableRooms = totalRooms - bookedRooms;

  const rooms = [
    { number: 101, status: 'occupied', ac: true, charges: 1500, checkIn: '2024-07-25 14:00', checkOut: '2024-07-27 10:00' },
    { number: 102, status: 'available', ac: true, charges: 1500 },
    { number: 103, status: 'occupied', ac: false, charges: 1200, checkIn: '2024-07-24 12:00', checkOut: '2024-07-26 11:00' },
    { number: 104, status: 'available', ac: true, charges: 1100 },
    { number: 105, status: 'occupied', ac: true, charges: 1500, checkIn: '2024-07-25 14:00', checkOut: '2024-07-27 10:00' },
    { number: 106, status: 'available', ac: false, charges: 1500 },
    { number: 107, status: 'occupied', ac: false, charges: 1200, checkIn: '2024-07-24 12:00', checkOut: '2024-07-26 11:00' },
    { number: 108, status: 'available', ac: true, charges: 1100 },
    { number: 109, status: 'occupied', ac: true, charges: 1500, checkIn: '2024-07-25 14:00', checkOut: '2024-07-27 10:00' },
    { number: 110, status: 'available', ac: false, charges: 1500 },
    { number: 111, status: 'occupied', ac: false, charges: 1200, checkIn: '2024-07-24 12:00', checkOut: '2024-07-26 11:00' },
    { number: 112, status: 'available', ac: true, charges: 1100 },
  ];

  const [acFilter, setAcFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');
  const [showBooking, setShowBooking] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  const handleShowBooking = (room) => {
    setSelectedRoom(room);
    setShowDetails(false); 
    setTimeout(() => setShowBooking(true), 200); 
  };

  const handleCloseBooking = () => {
    setShowBooking(false);
    setSelectedRoom(null);
  };

  const handleShowDetails = (room) => {
    setSelectedRoom(room);
    setShowDetails(true);
  };

  const handleCloseDetails = () => {
    setShowDetails(false);
    setSelectedRoom(null);
  };

  const filteredRooms = rooms.filter(room => {
    let acCondition = acFilter === 'All' || (acFilter === 'AC' && room.ac) || (acFilter === 'Non-AC' && !room.ac);
    let statusCondition = statusFilter === 'All' || (statusFilter === 'Available' && room.status === 'available') || (statusFilter === 'Occupied' && room.status === 'occupied');
    return acCondition && statusCondition;
  });

  return (
    <Container fluid className="rooms-dashboard">
      <Row className="mb-3">
        <Col>
          <h1>✭ Room Details ✭</h1>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <Card className="mb-4 card-total-rooms">
            <Card.Body>
              <Card.Title>Total Rooms</Card.Title>
              <Card.Text className="card-count">{totalRooms}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4 card-booked-rooms">
            <Card.Body>
              <Card.Title>Booked Rooms</Card.Title>
              <Card.Text className="card-count">{bookedRooms}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4 card-available-rooms">
            <Card.Body>
              <Card.Title>Available Rooms</Card.Title>
              <Card.Text className="card-count">{availableRooms}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="filter-row mb-3">
        <Col md={6} className="dropdown-button">
          <DropdownButton id="dropdown-basic-button" title={`AC Filter: ${acFilter}`}>
            <Dropdown.Item onClick={() => setAcFilter('All')}>All</Dropdown.Item>
            <Dropdown.Item onClick={() => setAcFilter('AC')}>AC</Dropdown.Item>
            <Dropdown.Item onClick={() => setAcFilter('Non-AC')}>Non-AC</Dropdown.Item>
          </DropdownButton>
        </Col>
        <Col md={6} className="dropdown-button">
          <DropdownButton id="dropdown-basic-button" title={`Status Filter: ${statusFilter}`}>
            <Dropdown.Item onClick={() => setStatusFilter('All')}>All</Dropdown.Item>
            <Dropdown.Item onClick={() => setStatusFilter('Available')}>Available</Dropdown.Item>
            <Dropdown.Item onClick={() => setStatusFilter('Occupied')}>Occupied</Dropdown.Item>
          </DropdownButton>
        </Col>
      </Row>
      <Row className="g-3">
        {filteredRooms.map((room) => (
          <Col key={room.number} className="col-room-card">
            <Card
              bg={room.status === 'available' ? 'success' : 'danger'}
              text="white"
              className="mb-3 small-room-card"
              onClick={() => handleShowDetails(room)}
            >
              <Card.Body>
                <Card.Text>Room No {room.number}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Modal show={showDetails} onHide={handleCloseDetails}>
        <Modal.Header closeButton>
          <Modal.Title>Room No {selectedRoom?.number}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedRoom && selectedRoom.status === 'occupied' ? (
            <>
              <p>Status: {selectedRoom.status}</p>
              <p>{selectedRoom.ac ? 'AC Room' : 'Non-AC Room'}</p>
              <p>Charges: ₹{selectedRoom.charges}</p>
              <p>Check-in: {selectedRoom.checkIn}</p>
              <p>Check-out: {selectedRoom.checkOut}</p>
            </>
          ) : selectedRoom ? (
            <>
              <p>Status: {selectedRoom.status}</p>
              <p>{selectedRoom.ac ? 'AC Room' : 'Non-AC Room'}</p>
              <p>Charges: ₹{selectedRoom.charges}</p>
              <Button variant="primary" onClick={() => handleShowBooking(selectedRoom)}>
                Booking
              </Button>
            </>
          ) : null}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDetails}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <ModelBooking show={showBooking} handleClose={handleCloseBooking} room={selectedRoom} />
      <UserTableCheckInOut/>
    </Container>
  );
};

export default Rooms;
