// App.js
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServiceSection from './components/ServiceSection';
import Location from './components/Location';
import Footer from './components/Footer';
import FashionCategory from './components/FashionCategory';
import OrdersList from './components/OrdersList';
import AdminPanel from './components/AdminPanel';

import './App.css';

function App() {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then((res) => res.json())
      .then((data) => setAllProducts(data))
      .catch((err) => console.error('Failed to fetch products:', err));
  }, []);

  const filterByCategory = (cat) => allProducts.filter((item) => item.category === cat);

  return (
    <div className="App">
      <Navbar />
      <Hero />

      {/* Services */}
      <ServiceSection id="nails" title="Nails Parlour" products={filterByCategory('nails')} />
      <ServiceSection id="beauty" title="Beauty Shop" products={filterByCategory('beauty')} />
      <ServiceSection id="studio" title="Photo Studio" products={filterByCategory('studio')} />

      {/* Fashion */}
      <FashionCategory id="men" title="Men's Fashion" products={filterByCategory('men')} />
      <FashionCategory id="women" title="Women's Fashion" products={filterByCategory('women')} />
      <FashionCategory id="kids" title="Kids' Fashion" products={filterByCategory('kids')} />

      <OrdersList />
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
    </div>
  );
}

export default App;
