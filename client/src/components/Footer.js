import React from 'react';
import './Footer.css'; // Create this CSS file for styling

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} PlantCure. All rights reserved.</p>
      <p>Designed & Developed by Bhrat Sharma</p>
      <p>Made With LOVE ❤️</p>
    </footer>
  );
}
