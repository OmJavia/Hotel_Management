import React from 'react';
import { Modal, Button, Carousel } from 'react-bootstrap';
import './ModelRecentActivities.css';

const ModelRecentActivities = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Recent Activities Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h3>Events</h3>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://th.bing.com/th/id/OIP.PVfPdHg9brCqS0SJk3-zwwHaE8?rs=1&pid=ImgDetMain?text=Music+Concert"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Music Concert</h3>
              <p>Enjoy live music with popular bands.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://th.bing.com/th/id/R.b28f8dc9265c1d2bb845daf2788bd215?rik=XRB0gL9t5vFB%2bg&riu=http%3a%2f%2fwww.newznew.com%2fwp-content%2fuploads%2f2015%2f01%2f31.jpg&ehk=Skbd0blfAEPSGc6GqRWTobAMdUpJk1BIhWGAgoAUrD8%3d&risl=&pid=ImgRaw&r=0?text=Food+Festival"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Food Festival</h3>
              <p>A variety of delicious foods to enjoy.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <h3 className="mt-4">Special Days</h3>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://th.bing.com/th/id/OIP.EE8RpgQnEFmrtOlCe4TDrgHaE7?w=626&h=417&rs=1&pid=ImgDetMain?text=Valentine's+Day"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Valentine's Day</h3>
              <p>Special decorations and offers for couples.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i.ytimg.com/vi/QOvMzkof95g/maxresdefault.jpg?text=Christmas"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Christmas</h3>
              <p>Festive celebrations and holiday cheer.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <h3 className="mt-4">Big Offers</h3>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://th.bing.com/th/id/OIP.3WcsoyLEZoaZmIMBvppt5QHaFj?rs=1&pid=ImgDetMain?text=50%25+Off+Italian+Cuisine"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>50% Off on Italian Cuisine</h3>
              <p>Special discount on all Italian dishes.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://th.bing.com/th/id/OIP.Y9v8Jr-IUlpJuMp1ryZ5KAHaHa?rs=1&pid=ImgDetMain?text=Buy+1+Get+1+Free"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Buy 1 Get 1 Free</h3>
              <p>Exciting offer on selected items.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <h3 className="mt-4">Special Parties</h3>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://groupbookingz.com/wp-content/uploads/2023/06/new-year-party-in-kanakapura-road-bangalore-7-1024x683-1.jpeg?text=New+Year+Party"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>New Year Party</h3>
              <p>Ring in the new year with a grand celebration.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://th.bing.com/th/id/OIP.rxF6vRMjShGWIzO_YMx_uQHaHa?rs=1&pid=ImgDetMain?text=Halloween+Party"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Halloween Party</h3>
              <p>Spooky fun and exciting activities.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModelRecentActivities;
