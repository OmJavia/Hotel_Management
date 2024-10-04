import React, { useState } from 'react';
import './BookingForm.css';
import Footer from '../Componenets/Footer';
import Navigation from '../Componenets/Navigation';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    checkIn: '',
    checkOut: '',
    guests: 1,
    roomType: 'standard',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    console.log('Booking data submitted:', formData);
  };

  return (
    <>
      <Navigation />
      <div className="booking-container">
        <h1>Room Booking</h1>
        <form className="booking-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="checkIn">Check-in Date:</label>
            <input
              type="date"
              id="checkIn"
              name="checkIn"
              value={formData.checkIn}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="checkOut">Check-out Date:</label>
            <input
              type="date"
              id="checkOut"
              name="checkOut"
              value={formData.checkOut}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="guests">Number of Guests:</label>
            <select
              id="guests"
              name="guests"
              value={formData.guests}
              onChange={handleChange}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="roomType">Room Type:</label>
            <select
              id="roomType"
              name="roomType"
              value={formData.roomType}
              onChange={handleChange}
            >
              <option value="standard">AC</option>
              <option value="deluxe">Non-AC</option>
            </select>
          </div>
          <button type="submit" className="submit-button">
            Book Now
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default BookingForm;
