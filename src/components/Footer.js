import React from 'react';
import { FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';
import '../App.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">

      <div className="footer-section about">
        <h3>About Us</h3>
        <p>
          Tripple B Fashion is your one-stop destination for all things stylish.
          From beauty and nails to photography and trendy fashion for men, women, and kids —
          we bring your glam dreams to life located at Adams Business Park, Nairobi.
        </p>
      </div>

      <div className="footer-section contact">
        <h3>Contact Us</h3>
        <p><strong>Phone:</strong> 0113 868 162</p>
        <p><strong>Email:</strong> irakozeclaude2023@gmail.com</p>
        <p><strong>Location:</strong> Adams Business Park, Nairobi</p>
      </div>

      <div className="footer-section social">
        <h3>Follow Us</h3>
        <p>
          <a href="https://wa.me/254113868162" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp /> WhatsApp
          </a><br />
          <a href="https://instagram.com/tripplebfashion" target="_blank" rel="noopener noreferrer">
            <FaInstagram /> Instagram
          </a><br />
          <a href="https://facebook.com/tripplebfashion" target="_blank" rel="noopener noreferrer">
            <FaFacebook /> Facebook
          </a>
        </p>
      </div>

    </div>

    <div className="footer-bottom">
      <p>&copy; {new Date().getFullYear()} Tripple B classic. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
