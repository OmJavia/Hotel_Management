import React from 'react';
import { Table, Container } from 'react-bootstrap';
import './UserTableCheck-in-out.css';

const users = [
  { name: 'Ajeet Ji Rajput', checkInDate: '2024-07-25', checkInTime: '01:00pm',checkOutDate: '2024-07-26', checkOutTime: '11:00am' },
  { name: 'Akku b', checkInDate: '2024-07-26', checkInTime: '04:00am',checkOutDate: '2024-07-27', checkOutTime: '11:00am' },
  { name: 'Deepak p', checkInDate: '2024-07-27', checkInTime: '10:00am',checkOutDate: '2024-07-28', checkOutTime: '11:00am' },
  { name: 'Aayush F', checkInDate: '2024-07-28', checkInTime: '03:00pm',checkOutDate: '2024-07-29', checkOutTime: '11:00am' },
];

const UserTableCheckInOut = () => {
  return (
    <Container fluid>
      <h1 className="text-center my-4">✭ User Check-in and Check-out Details ✭</h1>
      <Table striped bordered hover responsive className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Check-in Date</th>
            <th>Check-in Time</th>
            <th>Check-out Date</th>
            <th>Check-out Time</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.checkInDate}</td>
              <td>{user.checkInTime}</td>
              <td>{user.checkOutDate}</td>
              <td>{user.checkOutTime}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default UserTableCheckInOut;
