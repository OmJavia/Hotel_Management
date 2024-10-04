import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Overview from '../../Models/ModelOverview';
import ModelRecentActivities from '../../Models/ModelRecentActivities';
import ModelStatistics from '../../Models/ModelStatistics';
import ModelQuickLinks from '../../Models/ModelQuickLinks';
import './Cards.css';
import Rooms from './Rooms';

export default function Cards() {
  const [showOverview, setShowOverview] = useState(false);
  const [showRecentActivities, setShowRecentActivities] = useState(false);
  const [showStatistics, setShowStatistics] = useState(false);
  const [showQuickLinks, setShowQuickLinks] = useState(false);

  const handleCloseOverview = () => setShowOverview(false);
  const handleShowOverview = () => setShowOverview(true);

  const handleCloseRecentActivities = () => setShowRecentActivities(false);
  const handleShowRecentActivities = () => setShowRecentActivities(true);

  const handleCloseStatistics = () => setShowStatistics(false);
  const handleShowStatistics = () => setShowStatistics(true);

  const handleCloseQuickLinks = () => setShowQuickLinks(false);
  const handleShowQuickLinks = () => setShowQuickLinks(true);

  return (
    <Container fluid className="dashboard">
      <Row className="mb-4">
        <Col>
          <h1 style={{textAlign:'center'}}>✭ Our Hotel ✭</h1>
        </Col>
      </Row>
      <Row style={{paddingTop: '0'}}>
        <Col md={3}>
          <Card className="mb-4 card-overview">
            <Card.Body>
              <Card.Title>Overview</Card.Title>
              <Card.Text>
                A snapshot of the hotel's current status, including occupancy, amenities, and services of the hotel.
              </Card.Text>
              <Button variant="primary" onClick={handleShowOverview}>View Details</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="mb-4 card-recent-activities">
            <Card.Body>
              <Card.Title>Recent Activities</Card.Title>
              <Card.Text>
                Recent events, special days, big food offers, room discounts, party highlights, and guest reviews.
              </Card.Text>
              <Button variant="primary" onClick={handleShowRecentActivities}>View Details</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="mb-4 card-statistics">
            <Card.Body>
              <Card.Title>Statistics</Card.Title>
              <Card.Text>
                Displays key hotel metrics, including occupancy rates, revenue, guest demographics, and performance trends.
              </Card.Text>
              <Button variant="primary" onClick={handleShowStatistics}>View Details</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="mb-4 card-quick-links">
            <Card.Body>
              <Card.Title>Quick Links</Card.Title>
              <Card.Text>
                Direct access to booking, check-in/out, guest management, housekeeping, and many more options.
              </Card.Text>
              <Button variant="primary" onClick={handleShowQuickLinks}>View Links</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Modals */}
      <Overview show={showOverview} handleClose={handleCloseOverview} />
      <ModelRecentActivities show={showRecentActivities} handleClose={handleCloseRecentActivities} />
      <ModelStatistics show={showStatistics} handleClose={handleCloseStatistics} />
      <ModelQuickLinks show={showQuickLinks} handleClose={handleCloseQuickLinks} />
    <Rooms/>  
    </Container>
  );
}
