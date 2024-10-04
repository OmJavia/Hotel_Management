import React, { useState } from 'react';
import { Navbar, Nav, Form, FormControl, Button, Offcanvas, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar bg="transparent" variant="dark" expand="lg" className="navbar-custom sticky-top">
        <Button variant="outline-light" className="sidebar-toggle" onClick={handleShow} style={{color:'black'}}>
          ☰
        </Button>
        <Form className="d-flex mx-auto me-1 my-lg-0">
          <FormControl type="search" placeholder="Search" className="mr-9 me-2" />
          <Button variant="outline-danger" type="submit">Search</Button>
        </Form>
        <Dropdown align="end" className="ml-auto profile-dropdown">
          <Dropdown.Toggle variant="outline-light" id="dropdown-basic">
            <img
              src="https://www.pngitem.com/pimgs/m/87-877270_logo-icon-profile-png-transparent-png.png"
              height="40"
              className="d-inline-block align-top rounded-circle profile-icon"
              alt="Profile"
            />
          </Dropdown.Toggle>

          <Dropdown.Menu className="profile-menu">
            <Dropdown.Item as={Link} to="/profile">Profile View</Dropdown.Item>
            <Dropdown.Item as={Link} to="/settings">Settings</Dropdown.Item>
            <Dropdown.Item as={Link} to="/login">Login/Create Account</Dropdown.Item>
            <Dropdown.Item as={Link} to="#logout">Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Navbar>

      <Offcanvas show={show} onHide={handleClose} placement="start" className="sidebar-custom">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title style={{color:'White'}}>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav.Link as={Link} to="/">Dashboard</Nav.Link>
          <Nav.Link as={Link} to="/booking">Bookings</Nav.Link>
          <Nav.Link as={Link} to="/home">Home</Nav.Link>
          <Nav.Link as={Link} to="/services">Services</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Navigation;
