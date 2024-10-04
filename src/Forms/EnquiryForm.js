import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import './EnquiryForm.css';
import Navigation from '../Componenets/Navigation';
import Footer from '../Componenets/Footer';
const EnquiryForm = () => {
  return (
    <>
      <Navigation/>
        <div className='heading text-center my-4'>
          <h1 className="enquiry-page-title">Enquiry</h1>
        </div>
      <Container className="enquiry-page-container">
        <Form className="enquiry-page-form">
          <Row>
            <Col xs={12} md={6}>
              <Form.Group controlId="formName" className="enquiry-page-form-group">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" required />
              </Form.Group>

              <Form.Group controlId="formEmail" className="enquiry-page-form-group">
                <Form.Label>Your Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" required />
              </Form.Group>

              <Form.Group controlId="formEnquiryType" className="enquiry-page-form-group">
                <Form.Label>Your Enquiry Type</Form.Label>
                <Form.Control as="select" required>
                  <option value="">Select your enquiry type</option>
                  <option value="accommodation">Accommodation Enquiry</option>
                  <option value="other">Other</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="formArrivalDate" className="enquiry-page-form-group">
                <Form.Label>Date of Arrival</Form.Label>
                <Form.Control type="date" required />
              </Form.Group>
            </Col>

            <Col xs={12} md={6}>
              <Form.Group controlId="formNumberOfPersons" className="enquiry-page-form-group">
                <Form.Label>Number of Persons</Form.Label>
                <Form.Control type="number" placeholder="Enter number of persons" required />
              </Form.Group>

              <Form.Group controlId="formNumberOfDays" className="enquiry-page-form-group">
                <Form.Label>Number of Days</Form.Label>
                <Form.Control type="number" placeholder="Enter number of days" required />
              </Form.Group>

              <Form.Group controlId="formCustomerEnquiry" className="enquiry-page-form-group">
                <Form.Label>Customer Enquiry</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter your enquiry" />
              </Form.Group>

              <Button variant="primary" type="submit" className="enquiry-page-submit-button mt-3 w-40">
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
      <Footer/>
    </>
  );
};

export default EnquiryForm;
