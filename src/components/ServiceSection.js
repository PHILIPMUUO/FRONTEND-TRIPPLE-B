// src/components/ServiceSection.js
import React from 'react';

const ServiceSection = ({ id, title, products }) => (
  <section className="service-section" id={id}>
    <h2>{title}</h2>
    <div className="product-grid">
      {products.map((product, index) => (
        <div className="product-card" key={index}>
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.price}</p>
          <a
            className="order-button"
            href={`https://wa.me/254113868162?text=I'm interested in ${product.name}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Order Now
          </a>
        </div>
      ))}
    </div>
  </section>
);

export default ServiceSection;
