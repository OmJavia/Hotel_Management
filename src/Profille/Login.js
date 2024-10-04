import React from 'react';
import { Carousel, Container, Row, Col} from 'react-bootstrap';
import Navigation from '../Componenets/Navigation';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = ({mainComponent, formName}) => {
  return (
    <>
    <Navigation/> 
      <div className="login-container">
        <Container fluid>
          <Row>
            <Col md={6} className="login-image-carousel">
              <Carousel>
              <Carousel.Item >
                  <img
                    className="d-block object-none"
                    src="https://live.staticflickr.com/4260/34727605794_089bce22bd_b.jpg"
                    alt="Elegant hotel with pool"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block object-none"
                    src="https://vistapointe.net/images/hotel-1.jpg"
                    alt="Luxury hotel architecture"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block object-none"
                    src="https://th.bing.com/th/id/OIP.jsYKkEwghgDtJtF19sPEEgHaEK?rs=1&pid=ImgDetMain"
                    alt="Historical hotel view"
                  />
                </Carousel.Item>
              </Carousel>
            </Col>
            <Col md={6} className="login-form">
              <h1 className="login-heading">{formName}</h1>
              <div className="">
                {mainComponent}
              </div>
              <div className="sign-up-option">
                <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Login;