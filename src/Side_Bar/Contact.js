import React from 'react';
import './Contact.css';
import Footer from '../Componenets/Footer';
import Navigation from '../Componenets/Navigation';

const ContactPage = () => {
  return (
    <>
      <Navigation/>
      <div className="contact-container">
        <h1>Contact Us</h1>
        <p>If you have any questions or need further information, feel free to contact us. We're here to help!</p>
        
        <div className="contact-info">
          <div className="info-section">
            <h3>Address</h3>
            <p>123 Hotel Avenue, Indore, MP, India</p>
          </div>
          <div className="info-section">
            <h3>Phone</h3>
            <p>+91 12345 67890</p>
          </div>
          <div className="info-section">
            <h3>Email</h3>
            <p>info@hotel.com</p>
          </div>
        </div>

        <form className="contact-form">
          <label>
            Name:
            <input type="text" name="name" required />
          </label>
          <label>
            Email:
            <input type="email" name="email" required />
          </label>
          <label>
            Message:
            <textarea name="message" required></textarea>
          </label>
          <button type="submit">Send</button>
        </form>

        <div className="map-container">
          <h2>Our Location</h2>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.4264853992!2d75.86371941499999!3d22.6946542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd2ef1c90b9d%3A0xa8eab87c5c7d97a6!2sAPOLIUMS%20INFOTECH%20INDIA%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1682693400000!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default ContactPage;
