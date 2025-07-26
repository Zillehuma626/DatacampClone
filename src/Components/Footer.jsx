// components/Footer.jsx
import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { Link } from 'react-router-dom'; 
import logo from '../assets/images/FHA.png';
import accaLogo from '../assets/images/ACCA.png';
import xeroLogo from '../assets/images/xero.svg';
import taxcalcLogo from '../assets/images/taxcalc.png';
import aiaLogo from '../assets/images/AIA.png';

import './Footer.css';

const Footer = () => {
  return (
    <footer className="fhaconsultants-footer">
      <div className="footer-content">

        <div className="footer-col logo-col">
          <h2 className="footer-logo">
          <span className="logo-text-wrap">
              <img src={logo} alt="FHA Logo" className="footer-logo-img" />
              <span className="footer-logo-text">FHA Accountants</span>
            </span>
          </h2>
          <p>Precision-driven accounting and advisory services.</p>
          <div className="software-house-logos">
            <a href="https://www.accaglobal.com/gb/en.html" target="_blank" rel="noopener noreferrer">
              <img src={accaLogo} alt="acca" />
            </a>
            <a href="https://www.xero.com/" target="_blank" rel="noopener noreferrer">
              <img src={xeroLogo} alt="xero" />
            </a>
            <a href="https://www.taxcalc.com/" target="_blank" rel="noopener noreferrer">
              <img src={taxcalcLogo} alt="taxcalc" />
            </a>
            <a href="https://www.aiaworldwide.com/" target="_blank" rel="noopener noreferrer">
              <img src={aiaLogo} alt="aia" />
            </a>
          </div>
          <div className="social-icons">
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-facebook-f"></i></a>
          </div>
        </div>

        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul className="no-bullets">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/partners">Partners</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/quoteSection">Quote Section</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h3>Follow Us</h3>
          <div className="social-follow">
          <a 
            href="https://www.facebook.com/share/1C1xivYL5a/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaFacebookF className="facebook-icon" />
            <span>Facebook</span>
          </a>
          </div>
        </div>

        <div className="footer-col">
          <h3>Contact</h3>
          <p>
          📍 <a
            href="https://www.google.com/maps?q=129+Lewisham+Way,+London+SE14+6QJ"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            >
              129 Lewisham Way, London SE14 6QJ
            </a>
          </p>

          <p>
            ✉️  <a href="mailto:info@fhaconsultants.co.uk" className="footer-link">
              Contact@fhaaccountants.co.uk
            </a>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; 2025 FHA Accountants. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
