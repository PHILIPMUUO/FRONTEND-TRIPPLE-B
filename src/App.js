import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios';

import AdminLogin from './pages/AdminLogin';
import AdminPanel from './components/AdminPanel';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServiceSection from './components/ServiceSection';
import FashionCategory from './components/FashionCategory';
import Location from './components/Location';
import Footer from './components/Footer';

import './App.css';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error("Failed to fetch products", err));
  }, []);

  const nailsProducts = products.filter(p => p.category === 'nails');
  const beautyProducts = products.filter(p => p.category === 'beauty');
  const studioServices = products.filter(p => p.category === 'studio');
  const menFashion = products.filter(p => p.category === 'men');
  const womenFashion = products.filter(p => p.category === 'women');
  const kidsFashion = products.filter(p => p.category === 'kids');

  return (
    <Router>
      <div className="App">
        <Routes>

          {/* MAIN WEBSITE */}
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Hero />
                <ServiceSection id="nails" title="Nails Parlour" products={nailsProducts} />
                <ServiceSection id="beauty" title="Beauty Shop" products={beautyProducts} />
                <ServiceSection id="studio" title="Photo Studio" products={studioServices} />
                <FashionCategory id="men" title="Men's Fashion" products={menFashion} />
                <FashionCategory id="women" title="Women's Fashion" products={womenFashion} />
                <FashionCategory id="kids" title="Kids' Fashion" products={kidsFashion} />
                <Location />
                <Footer />

                {/* WhatsApp Floating Button */}
                <a
                  href="https://wa.me/254113868162"
                  className="whatsapp-float"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/images/whatsapp-icon.png" alt="WhatsApp" />
                </a>
              </>
            }
          />

          {/* PROTECTED ADMIN ROUTE */}
          <Route
            path="/admin"
            element={
              localStorage.getItem('isAdmin') === 'true' ? (
                <AdminPanel />
              ) : (
                <Navigate to="/admin-login" replace />
              )
            }
          />

          {/* LOGIN ROUTE */}
          <Route path="/admin-login" element={<AdminLogin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
