import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-section">
        <div className="footer-title">Services</div>
        <ul className="footer-link-list">
          <li><a href="/therapy" className="footer-link">Therapy</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <div className="footer-title">Connect</div>
        <div className="footer-social-icons">
          <a href="https://facebook.com" className="footer-social-icon"><FaFacebookF /></a>
          <a href="https://twitter.com" className="footer-social-icon"><FaTwitter /></a>
          <a href="https://instagram.com" className="footer-social-icon"><FaInstagram /></a>
          {/* Add more icons as needed */}
        </div>
      </div>
     
      <div className="footer-bottom">
        © 2024 Sharon's Therapy. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;