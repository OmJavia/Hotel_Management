import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './EmergencyContacts.css'; 
import Navigation from '../Componenets/Navigation';

const EmergencyContacts = () => {
  return (
    <div>
      <Navigation/>
      <Container className="emergency-contacts-container">
        <Row className="mt-3">
          <Col>
            <h1 className="text-center">Emergency Contacts</h1>
            <Card className="mb-3 contact-card">
              <Card.Body>
                <Card.Title>Fire Department</Card.Title>
                <Card.Text>
                  Phone: 101
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="mb-3 contact-card">
              <Card.Body>
                <Card.Title>Staff Complaint</Card.Title>
                <Card.Text>
                  Phone: 1002003001
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="mb-3 contact-card">
              <Card.Body>
                <Card.Title>Ambulance</Card.Title>
                <Card.Text>
                  Phone: 102
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>  
  );
}

export default EmergencyContacts;
