import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import './FeedbackReviews.css';
import Navigation from '../Componenets/Navigation';
import Footer from '../Componenets/Footer';

const FeedbackReviews = () => {
  const [feedback, setFeedback] = useState('');
  const [reviews, setReviews] = useState([]);
  
  const handleFeedbackChange = (e) => setFeedback(e.target.value);

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    if (feedback.trim()) {
      setReviews([...reviews, feedback]);
      setFeedback('');
    }
  };

  return (
    <div>
    <Navigation/>
      <Container className="feedback-reviews-container">
        <Row className="mt-3">
          <Col>
            <h1 className="text-center">Feedback and Reviews</h1>
            <Card className="mb-3 feedback-card">
              <Card.Body>
                <Card.Title>Submit Your Feedback</Card.Title>
                <Form onSubmit={handleFeedbackSubmit}>
                  <Form.Group controlId="feedbackForm.ControlTextarea">
                    <Form.Label>Your Feedback</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      value={feedback}
                      onChange={handleFeedbackChange}
                      placeholder="Write your feedback here..."
                    />
                  </Form.Group>
                  <Button className="my-3" variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </Card.Body>
            </Card>
            {reviews.length > 0 && (
              <Card className="mb-3 reviews-card">
                <Card.Body>
                  <Card.Title>Recent Reviews</Card.Title>
                  {reviews.map((review, index) => (
                    <Card.Text key={index} className="review-text">
                      {review}
                    </Card.Text>
                  ))}
                </Card.Body>
              </Card>
            )}
          </Col>
        </Row>
      </Container>
      <Footer/>
    </div>
  );
};

export default FeedbackReviews;
