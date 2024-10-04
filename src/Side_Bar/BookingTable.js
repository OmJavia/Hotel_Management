import React, { useState } from 'react';
import { Table, Container, Row, Col, Button, Form } from 'react-bootstrap';
import ModelUserInformation from '../Models/ModelUserInformation';
import './BookingTable.css';
import Navigation from '../Componenets/Navigation';

const BookingTable = () => {
  const initialBookings = [
    { 
      name: 'Ajeet', 
      contact: '1234567890', 
      idProofName: 'Passport', 
      idProofNo: 'A1234567', 
      checkInTime: '2024-07-25 14:00', 
      checkOutTime: '2024-07-27 10:00', 
      date: '2024-07-25' 
    },
    { 
      name: 'Akash', 
      contact: '12445673534', 
      idProofName: 'Passport', 
      idProofNo: 'A1234543', 
      checkInTime: '2024-06-25 14:00', 
      checkOutTime: '2024-06-29 10:00', 
      date: '2024-07-25' 
    },
    { 
      name: 'Ayush', 
      contact: '1234562345', 
      idProofName: 'Passport', 
      idProofNo: 'A1234000', 
      checkInTime: '2024-05-25 14:00', 
      checkOutTime: '2024-05-29 10:00', 
      date: '2024-07-25' 
    },
    { 
      name: 'Anshul', 
      contact: '123456111', 
      idProofName: 'Passport', 
      idProofNo: 'A1234222', 
      checkInTime: '2024-01-20 14:00', 
      checkOutTime: '2024-01-27 10:00', 
      date: '2024-07-25' 
    },
    { 
      name: 'Ankit', 
      contact: '123456555', 
      idProofName: 'Passport', 
      idProofNo: 'A1234444', 
      checkInTime: '2024-02-22 14:00', 
      checkOutTime: '2024-02-29 10:00', 
      date: '2024-07-25' 
    },
    { 
      name: 'Aman', 
      contact: '1234567121', 
      idProofName: 'Passport', 
      idProofNo: 'A1234232', 
      checkInTime: '2024-03-22 14:00', 
      checkOutTime: '2024-03-29 10:00', 
      date: '2024-07-25' 
    },
    { 
      name: 'Akshay', 
      contact: '1234566868', 
      idProofName: 'Passport', 
      idProofNo: 'A12349393', 
      checkInTime: '2024-09-15 14:00', 
      checkOutTime: '2024-09-23 10:00', 
      date: '2024-07-25' 
    },
    { 
      name: 'Avinash', 
      contact: '123456555', 
      idProofName: 'Passport', 
      idProofNo: 'A12345454', 
      checkInTime: '2024-12-15 14:00', 
      checkOutTime: '2024-12-22 10:00', 
      date: '2024-07-25' 
    },
    { 
      name: 'Abhineet', 
      contact: '1234560909', 
      idProofName: 'Passport', 
      idProofNo: 'A1234242', 
      checkInTime: '2024-07-25 14:00', 
      checkOutTime: '2024-07-27 10:00', 
      date: '2024-07-25' 
    },
    { 
      name: 'Anubhav', 
      contact: '1234565665', 
      idProofName: 'Passport', 
      idProofNo: 'A1234001', 
      checkInTime: '2024-11-20 14:00', 
      checkOutTime: '2024-11-27 10:00', 
      date: '2024-07-25' 
    },
    { 
      name: 'Akansha', 
      contact: '123456004', 
      idProofName: 'Passport', 
      idProofNo: 'A1234003', 
      checkInTime: '2024-11-20 14:00', 
      checkOutTime: '2024-11-27 10:00', 
      date: '2024-07-25' 
    },
    { 
      name: 'Anubhav', 
      contact: '1234567890', 
      idProofName: 'Passport', 
      idProofNo: 'A1234005', 
      checkInTime: '2024-08-20 14:00', 
      checkOutTime: '2024-08-27 10:00', 
      date: '2024-07-25' 
    },
    { 
      name: 'Ajeet', 
      contact: '123456006', 
      idProofName: 'Passport', 
      idProofNo: 'A1234008', 
      checkInTime: '2024-03-21 13:00', 
      checkOutTime: '2024-03-29 10:00', 
      date: '2024-07-25' 
    },
  ];

  const [bookingsData, setBookingsData] = useState(initialBookings);
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const bookingsPerPage = 10;

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCheckInDateChange = (e) => {
    setCheckInDate(e.target.value);
  };

  const handleCheckOutDateChange = (e) => {
    setCheckOutDate(e.target.value);
  };

  const filteredBookings = bookingsData.filter(booking => {
    const matchesSearchTerm = searchTerm 
      ? Object.values(booking).some(value => 
          value.toString().toLowerCase().includes(searchTerm.toLowerCase())
        ) 
      : true;

    const matchesCheckInDate = checkInDate 
      ? booking.checkInTime && booking.checkInTime.startsWith(checkInDate) 
      : true;

    const matchesCheckOutDate = checkOutDate 
      ? booking.checkOutTime && booking.checkOutTime.startsWith(checkOutDate) 
      : true;

    return matchesSearchTerm && matchesCheckInDate && matchesCheckOutDate;
  });

  const indexOfLastBooking = currentPage * bookingsPerPage;
  const indexOfFirstBooking = indexOfLastBooking - bookingsPerPage;
  const currentBookings = filteredBookings.slice(indexOfFirstBooking, indexOfLastBooking);

  const handleNextPage = () => {
    if (currentPage < Math.ceil(filteredBookings.length / bookingsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleShowModal = (booking) => {
    setSelectedBooking(booking);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedBooking(null);
  };

  const handleSaveBooking = (updatedBooking) => {
    setBookingsData(bookingsData.map(booking => 
      booking.idProofNo === updatedBooking.idProofNo ? updatedBooking : booking
    ));
  };

  return (
    <>
      <Navigation/>
      <Container className="booking-table-container">
        <Row className="mt-3">
          <Col xs={12} className="text-center">
            <h1>Booking Center</h1>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col xs={12} md={3} className="mb-3">
            <Form.Label>Check-In Time</Form.Label>
            <Form.Control 
              type="date" 
              value={checkInDate} 
              onChange={handleCheckInDateChange} 
            />
          </Col>
          <Col xs={12} md={3} className="mb-3">
            <Form.Label>Check-Out Time</Form.Label>
            <Form.Control 
              type="date" 
              value={checkOutDate} 
              onChange={handleCheckOutDateChange} 
            />
          </Col>
          <Col xs={12} md={3} className="mb-3">
            <Form.Label>Search</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Search" 
              value={searchTerm} 
              onChange={handleSearchChange} 
            />
          </Col>
          <Col xs={12} md={3} className="mb-3 d-flex align-items-end">
            {/* <Button 
              variant="primary" 
              onClick={() => setCurrentPage(1)}
            >
              Search
            </Button> */}
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <Table striped bordered hover responsive style={{ border: '2px' }}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Contact No.</th>
                  <th>ID Proof Name</th>
                  <th>ID Proof No.</th>
                  <th>Check-In Time</th>
                  <th>Check-Out Time</th>
                  {/* <th>Date</th> */}
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {currentBookings.map((booking, index) => (
                  <tr key={index}>
                    <td>{booking.name}</td>
                    <td>{booking.contact}</td>
                    <td>{booking.idProofName}</td>
                    <td>{booking.idProofNo}</td>
                    <td>{booking.checkInTime}</td>
                    <td>{booking.checkOutTime}</td>
                    {/* <td>{booking.date}</td> */}
                    <td>
                      <Button 
                        variant="info" style={{border:'2px dotted black'}}
                        onClick={() => handleShowModal(booking)}
                      >
                        i
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <div className="pagination-buttons">
              <Button 
                variant="secondary" 
                onClick={handlePreviousPage} 
                disabled={currentPage === 1}
              >
                Previous
              </Button>
              <Button 
                variant="secondary" 
                onClick={handleNextPage} 
                disabled={currentPage === Math.ceil(filteredBookings.length / bookingsPerPage)}
              >
                Next
              </Button>
            </div>
          </Col>
        </Row>
      </Container>

      <ModelUserInformation 
        show={showModal} 
        handleClose={handleCloseModal} 
        booking={selectedBooking} 
        handleSave={handleSaveBooking}
      />
    </>
  );
};

export default BookingTable;
