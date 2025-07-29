import React, { useState } from 'react';
import './Contact.css';
import contactImage from '../assets/images/contact.jpeg';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('https://fha-accountants-backend.onrender.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      alert(data.message || 'Message sent!');
    } catch (err) {
      console.error(err);
      alert('Failed to send message');
    }
  };

  return (
    <section id="contact" className="contact-section">
      <h3 className="contact-heading">Contact Us</h3>

      <div className="contact-content">
        <div className="contact-image-wrapper">
          <img
            src={contactImage}
            alt="Contact Us"
            className="contact-image"
          />
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
      <p className="contact">Leave us a message</p>
      
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        autoComplete='name'
        required
        value={formData.name}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        autoComplete='email'
        required
        value={formData.email}
        onChange={handleChange}
      />

      <textarea
        name="message"
        rows="4"
        placeholder="Your Message"
        autoComplete='on'
        required
        value={formData.message}
        onChange={handleChange}
      ></textarea>

      <button type="submit">Send Message</button>
    </form>
      </div>

      {/* Contact Info Section */}
      <div className="info-section">
        <div className="info-box">
          <h4>Our Office</h4>
          <p>129 Lewisham Way <br />London SE146QJ</p>
        </div>
        <div className="info-box">
          <h4>Working Hours</h4>
          <p>9:00 AM - 6:00 PM, Mon to Fri<br />Closed, Sat & Sun</p>
        </div>
        <div className="info-box">
          <h4>Contact</h4>
          <p>Contact@fhaccountants.co.uk</p>
        </div>
      </div>

      {/* Google Maps Embed */}
      <div style={{ width: '500%', display: 'flex', justifyContent: 'center' }}>
        <div className="map-container">
          <iframe
            title="FHA Accountants Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9937.9091885482!2d-0.03513552826414244!3d51.47098626293017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760287bc8675c1%3A0xc0a65875e8c3f377!2s129%20Lewisham%20Way%2C%20London%20SE14%206QJ%2C%20UK!5e0!3m2!1sen!2s!4v1721120514137!5m2!1sen!2s"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;

