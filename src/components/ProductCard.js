import React from 'react';

const ProductCard = ({ product }) => {
  const { name, price, image, category } = product;

  // Encode the WhatsApp message
  const message = `Hello, I'm interested in this product:
- Name: ${name}
- Price: Ksh ${price}
- Category: ${category}
Image: ${window.location.origin}${image}`;

  const whatsappLink = `https://wa.me/254702987550?text=${encodeURIComponent(message)}`;

  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Ksh {price}</p>
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="order-btn">
        Order Now via WhatsApp
      </a>
    </div>
  );
};
export default ProductCard;
