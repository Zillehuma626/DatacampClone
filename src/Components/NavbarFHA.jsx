import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './NavbarFHA.css';
import fhalogo from '../assets/images/FHA.png';

const services = [
  'Auto-Enrolment Services',
  'Payroll',
  'Taxation',
  'Accounting',
  'Advisory'
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const menuRef = useRef(null);
  const iconRef = useRef(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        iconRef.current &&
        !iconRef.current.contains(event.target) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <img src={fhalogo} alt="FHA Logo" className="logo-img" />
        <span className="logo-text">FHA Accountants</span>
      </Link>

      {/* Hamburger icon */}
      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
        ref={iconRef}
      >
        ☰
      </div>

      {/* Nav links */}
      <ul className={`nav-links ${menuOpen ? 'active' : ''}`} ref={menuRef}>
        <li className="nav-item-container">
          <Link to="/about" className="nav-item">Why Us</Link>
        </li>

        {/* Dropdown Menu */}
        <li
          className="nav-item-container dropdown"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
          ref={dropdownRef}
        >
          <span className="nav-item">Services ▾</span>
          {dropdownOpen && (
            <ul className="dropdown-menu">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    to={`/services/${service.toLowerCase().replace(/\s+/g, '-')}`}
                    className="dropdown-link"
                    onClick={() => setMenuOpen(false)}
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>

        <li className="nav-item-container">
          <Link to="/quoteSection" className="nav-item">Get Quote</Link>
        </li>
        <li className="nav-item-container">
          <Link to="/partners" className="nav-item">Partners</Link>
        </li>
        <li className="nav-item-container">
          <Link to="/contact" className="nav-item">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
