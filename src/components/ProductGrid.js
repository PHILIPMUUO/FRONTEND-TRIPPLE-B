import React from 'react';

const ProductCard = ({ product }) => {
  const { name, price, image, category } = product;

  // Full image URL
  const imageUrl = `${window.location.origin}/images/${image}`;

  // Your WhatsApp number (use 254... format)
  const phone = "254113868162";

  const message = `Hello Tripple B! I would like to order this product:\n\n🛍️ *${name}*\n💰 Price: KES ${price}\n📸 Image: ${imageUrl}\n📂 Category: ${category}\n\nPlease confirm availability.`;

  const whatsappURL = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <div style={{ border: '1px solid #ccc', padding: 12, margin: 10 }}>
      <img src={imageUrl} alt={name} style={{ width: '100%', maxHeight: 200, objectFit: 'cover' }} />
      <h3>{name}</h3>
      <p>Category: {category}</p>
      <p>Price: KES {price}</p>
      <a href={whatsappURL} target="_blank" rel="noopener noreferrer">
        <button style={{ padding: 8, background: 'green', color: 'white', border: 'none', cursor: 'pointer' }}>
          Order Now via WhatsApp
        </button>
      </a>
    </div>
  );
};

export default ProductCard;
