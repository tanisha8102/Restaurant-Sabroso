import React from 'react';
import './Footer.css';
import logo from '../assets/logo-light.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter, faSnapchat, faPinterest } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <img className="footer-logo" src={logo} alt="Caverta Logo" />
          <p className="footer-description">
            For a truly memorable dining experience reserve in advance a table as soon as you can. Come and taste our remarkable food and wine.
          </p>
        </div>

        <div className="footer-section">
          <h2 className="footer-title">ADDRESS</h2>
          <p>58 Ralph Ave</p>
          <p>New York, New York 1111</p>
          <p>P: +1 800 000 111</p>
          <p>E: contact@example.com</p>
        </div>

        <div className="footer-section">
          <h2 className="footer-title">HOURS</h2>
          <p>Monday – Sunday</p>
          <p>Lunch: 12PM – 2PM</p>
          <p>Dinner: 6PM – 10PM</p>
          <p>Happy Hours: 4PM – 6PM</p>
        </div>

        <div className="footer-section">
          <h2 className="footer-title">MORE INFO</h2>
          <p>Careers</p>
          <p>Get in Touch</p>
          <p>Privacy Policy</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright © 2025, Sabroso. Designed by Tanisha 🤍</p>
        <div className="footer-social-icons">
          <FontAwesomeIcon icon={faFacebook} size="lg" />
          <FontAwesomeIcon icon={faTwitter} size="lg" />
          <FontAwesomeIcon icon={faInstagram} size="lg" />
          <FontAwesomeIcon icon={faSnapchat} size="lg" />
          <FontAwesomeIcon icon={faPinterest} size="lg" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
