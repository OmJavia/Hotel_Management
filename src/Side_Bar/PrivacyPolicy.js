import React from 'react';
import './PrivacyPolicy.css';
import Navigation from '../Componenets/Navigation';
import Footer from '../Componenets/Footer';

const PrivacyPolicy = () => {
  return (
    <>
    <Navigation/>
        <div className="privacy-policy-container">
        <h1>Privacy Policy</h1>

        <h2>Introduction</h2>
        <p>
            At Our Hotel, we are committed to protecting the privacy and security of our guests. This privacy policy outlines how we collect, use, and safeguard your personal information when you visit our website or stay at our hotel.
        </p>

        <h2>Information Collection</h2>
        <p>
            We may collect personal information such as your name, contact details, payment information, and preferences when you make a reservation, sign up for our newsletter, or interact with our website or staff.
        </p>

        <h2>Use of Information</h2>
        <p>
            We use your personal information to process your reservation, provide you with the best possible service, and communicate with you about your stay or our services. We may also use your information for marketing purposes, such as sending you promotional offers or newsletters, if you have consented to receive such communications.
        </p>

        <h2>Information Sharing</h2>
        <p>
            We do not sell, trade, or rent your personal information to third parties. However, we may share your information with trusted service providers who assist us in operating our website, conducting our business, or servicing you, as long as those parties agree to keep this information confidential.
        </p>

        <h2>Data Security</h2>
        <p>
            We implement appropriate security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. These measures include physical, electronic, and managerial procedures to safeguard and secure the information we collect.
        </p>

        <h2>Your Rights</h2>
        <p>
            You have the right to access, update, or delete your personal information at any time. If you have any questions or concerns about our privacy policy or your personal information, please contact us at the email address provided on our website.
        </p>

        <h2>Changes to Privacy Policy</h2>
        <p>
            We reserve the right to modify this privacy policy at any time. Any changes will be effective immediately upon posting the revised policy on our website. Your continued use of our website or services after such changes have been made indicates your acceptance of the revised policy.
        </p>
        </div>
        <Footer/>
    </>
  );
};

export default PrivacyPolicy;