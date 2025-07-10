import React, { useState } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

<li><Link to="/admin">Admin</Link></li>


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="logo">
        <img src="/images/logo.png" alt="Tripple B Fashion Logo" />
      </div>

      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        <div className={menuOpen ? 'bar rotate1' : 'bar'}></div>
        <div className={menuOpen ? 'bar fade' : 'bar'}></div>
        <div className={menuOpen ? 'bar rotate2' : 'bar'}></div>
      </div>

      <nav>
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li><a href="#home">Home</a></li>
          <li className="dropdown">
            <a href="#services">Services</a>
            <ul className="dropdown-content">
              <li><a href="#nails">Nails Parlour</a></li>
              <li><a href="#beauty">Beauty Shop</a></li>
              <li><a href="#studio">Photo Studio</a></li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="#fashion">Fashion & Wear</a>
            <ul className="dropdown-content">
              <li><a href="#men">Men</a></li>
              <li><a href="#women">Women</a></li>
              <li><a href="#kids">Kids</a></li>
            </ul>
          </li>
          <li><a href="#location">Location</a></li>
          <li><a href="/admin">Admin</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
