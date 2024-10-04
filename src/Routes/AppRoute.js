import React from 'react'
import { 
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
  
import Dashboard from '../Side_Bar/Dashboard';
import EmergencyContacts from '../Quick/EmergencyContacts';
import FeedbackReviews from '../Quick/FeedbackReviews';
import BookingTable from '../Side_Bar/BookingTable';
import ContactPage from '../Side_Bar/Contact';
import BookingForm from '../Forms/BookingForm';
import EnquiryForm from '../Forms/EnquiryForm';
import Home from '../Side_Bar/Home';
import Services from '../Side_Bar/Services';
import About from '../Side_Bar/About';
import UserForm from '../Profille/User';
import Staff from '../Profille/Staff';
import SignUp from '../Profille/Signup';
import PrivacyPolicy from '../Side_Bar/PrivacyPolicy';

function AppRoute() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Dashboard/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/services" element={<Services/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/booking" element={<BookingTable/>} />
            <Route path="/contact" element={<ContactPage/>} />
            <Route path="/emergency-contacts" element={<EmergencyContacts/>} />
            <Route path="/feedback-reviews" element={<FeedbackReviews/>} />
            <Route path="/room-booking" element={<BookingForm/>} />
            <Route path="/enquiry" element={<EnquiryForm/>} />
            <Route path="/login" element={<UserForm/>} />
            <Route path="/signup" element={<SignUp/>} />
            <Route path="/staff" element={<Staff/>} />
            <Route path="/privacy" element={<PrivacyPolicy/>} />
        </Routes>
    </Router>
  )
}

export default AppRoute
