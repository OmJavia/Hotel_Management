import React from "react";
import { FaExternalLinkAlt, FaTwitter} from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <h4>Resources</h4>
          <ul>
            <li><a href="/room-booking">Room book</a></li>
            <li><a href="#member">Become A Member</a></li>
            <li><a href="/feedback-reviews">Send Us Feedback</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Help</h4>
          <ul>
            <li><a href="/emergency-contacts">Get Help</a></li>
            <li><a href="/contact">Contact us</a></li>
            <li><a href="/enquiry">Enquiry</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Resturent</h4>
          <ul>
            <li><a href="/about">About</a></li>
            <li><a 
                href="/Assets/Hotel Menu.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                download
              >Structure</a></li>
            <li><a href="#car">Certificates</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Overview</h4>
          <ul>
            <li>
              <a href="https://www.linkedin.com/company/taj-hotels/" style={{ fontSize: '20px' }}>
                <FaExternalLinkAlt />
              </a>
            </li>
            <li>
              <a href="https://x.com/tajhotels?s=21" style={{ fontSize: '20px' }}>
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/tajhotels?igsh=MWgzajdqdHdsZ3hleQ==" style={{ fontSize: '20px' }}>
                <RiInstagramFill />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <p>© Dec 1903 Taj Hotel, Inc. All rights reserved</p>
        </div>
        <div className="footer-bottom-right">
          <ul>
            <li><a href="/guide">Guides</a></li>
            <li><a href="/sale">Terms of Sale</a></li>
            <li><a href="/terms">Terms of Use</a></li>
            <li><a href="/privacy">Hotel Privacy Policy</a></li>
          </ul>
        </div>
        <div className="footer-country">
        <a href="#global">India <span className="globe-icon">🌐</span></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
