// src/Pages/ContactPage.js
import React from 'react';
import './PageStyles.css';

export default function ContactPage() {
  return (
    <div className="page-container">
      <h2 className="page-title">Contact Us</h2>
      <p className="page-text">
        Have questions, suggestions, or feedback? We’d love to hear from you!
      </p>
      <div className="contact-details">
        <p>Email: <a href="mailto:support@plantcure.com">support@plantcure.com</a></p>
        <p>Phone: +91 98765 43210</p>
        <p>Address: Green Valley, Plant City, Earth 🌱</p>
      </div>
    </div>
  );
}
