// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css'; // custom CSS file for header styling

export default function Header() {
  return (
    <header className="header">
      <div className="logo-section">
        <img src="/logo.jpg" alt="PlantCure Logo" className="logo" />

        <h1 className="title">PlantCure</h1>
      </div>

      <nav className="nav-links">
        <Link to="/">Home</Link>
       <Link to="/about">About</Link>
       <Link to="/contact">Contact Us</Link>
      </nav>
    </header>
  );
}
