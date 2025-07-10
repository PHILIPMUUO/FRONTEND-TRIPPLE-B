import React from 'react';
import '../App.css';

const Location = () => {
  return (
    <section id="location" className="location">
      <h2>Our Location</h2>
      <p>Visit us at Adams Business Park, Nairobi.</p>
      <iframe
        title="Tripple B Location"
        src="https://www.google.com/maps?q=Adams+Business+Park+Nairobi&output=embed"
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </section>
  );
};

export default Location;
