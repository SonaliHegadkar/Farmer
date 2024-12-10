import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>We are a team dedicated to work for farmers problem and introduce them to various policies and technologies related to farming.</p>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>123 Sonavari Road, Saswad, Pune</p>
          <p>Email: contact@farmerfriendconnect.com</p>
          <p>Phone: (+91) 8572639615</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} FarmFriend Connect. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
