import React from 'react';
import { Modal, Carousel, Button } from 'react-bootstrap';
import './ModelOverview.css';

const Overview = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Hotel Overview</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Hotel Structure</h4>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://live.staticflickr.com/4260/34727605794_089bce22bd_b.jpg?text=Hotel+Structure+1"
              alt="Hotel Structure 1"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://cdn-dbahi.nitrocdn.com/dndfaRWiMEtaQDCyYWGlVCufEMsvytCl/assets/images/optimized/rev-092b9b1/wp-content/uploads/2021/01/IMG_20210101_153037-1.jpg?text=Hotel+Structure+2"
              alt="Hotel Structure 2"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.postoast.com/wp-content/uploads/2021/09/History-of-Taj-Hotel.jpg?text=Hotel+Structure+2"
              alt="Hotel Structure 2"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://th.bing.com/th/id/OIP.aVhjJNGoCE4lTB6GSn2G0gHaFj?w=1006&h=754&rs=1&pid=ImgDetMain?text=Hotel+Structure+2"
              alt="Hotel Structure 2"
            />
          </Carousel.Item>
        </Carousel>

        <h4 className="mt-4">Rooms - AC</h4>
        <Carousel>
          {/* Add your images here */}
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://th.bing.com/th/id/OIP.a5gygpiceT26imOsteYMSAHaFX?rs=1&pid=ImgDetMain?text=AC+Room+1"
              alt="AC Room 1"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://th.bing.com/th/id/R.e170d85fd454b24b4eca2ba0395ebebf?rik=YBhiqzsIErCrZQ&riu=http%3a%2f%2fwww.travelgrove.com%2fblog%2fwp-content%2fuploads%2f2016%2f06%2ftrump-taj-mahal-room.png&ehk=4uvBzRJKgrZv0IE1ES6rHz1nKyilufr4uKUc5KlSvec%3d&risl=&pid=ImgRaw&r=0?text=AC+Room+2"
              alt="AC Room 2"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i.pinimg.com/736x/fb/e0/cf/fbe0cf473c10a4b91f9877497c39aad9--double-bedroom-nashville.jpg?text=AC+Room+2"
              alt="AC Room 2"
            />
          </Carousel.Item>
        </Carousel>

        <h4 className="mt-4">Rooms - Non-AC</h4>
        <Carousel>
          {/* Add your images here */}
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://5.imimg.com/data5/GQ/NT/GLADMIN-54797278/non-ac-room-service-500x500.png?text=Non-AC+Room+1"
              alt="Non-AC Room 1"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://media-cdn.tripadvisor.com/media/photo-s/02/b4/b6/4e/sandals-whitehouse-european.jpg?text=Non-AC+Room+2"
              alt="Non-AC Room 2"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://th.bing.com/th/id/R.c91f421af03568fc408b9a14e19f637a?rik=6AMgMQ2hwclRVw&riu=http%3a%2f%2fcdn5.tropicalsky.co.uk%2fimages%2f560x420%2fsandals-montego-bay-grande-luxe-beachfront-room.jpg&ehk=epZaGUYot6xdQiyHQtrL1jO528yiUKyfpVcf47TR1LY%3d&risl=&pid=ImgRaw&r=0?text=Non-AC+Room+2"
              alt="Non-AC Room 2"
            />
          </Carousel.Item>
        </Carousel>

        <h4 className="mt-4">Food Structure</h4>
        <Carousel>
          {/* Add your images here */}
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://media-cdn.tripadvisor.com/media/photo-s/16/ef/42/14/delicious-indian-food.jpg?text=Food+Structure+1"
              alt="Food Structure 1"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://th.bing.com/th/id/OIP.7llyUiL3TyUcKzE0LGkf_QHaFX?w=1200&h=870&rs=1&pid=ImgDetMain?text=Food+Structure+2"
              alt="Food Structure 2"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://media-cdn.tripadvisor.com/media/photo-s/0f/14/be/30/menu.jpg?text=Food+Structure+2"
              alt="Food Structure 2"
            />
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

export default Overview;