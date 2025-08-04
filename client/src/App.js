import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import DiagnosePage from './Pages/DiagnosePage';
import AddPage from './Pages/AddPage';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import Header from './components/Header';
import { Link } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';


function App() {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
}

function MainLayout() {
  const location = useLocation();

  // Show navbar only on home and add page
  const showNavbar = location.pathname === '/' || location.pathname === '/add';

  return (
    <div className="App">
      <Header />

      {showNavbar && (
        <nav className="navbar">
          <Link to="/" className="nav-button">🧪 Diagnose</Link>
          <Link to="/add" className="nav-button">➕ Add Disease</Link>
        </nav>
      )}

      <Routes>
        <Route path="/" element={<DiagnosePage />} />
        <Route path="/add" element={<AddPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <Chatbot />
      

      <Footer />
    </div>
  );
}

export default App;
