// src/components/LoadingSpinner.jsx
import React from 'react';
import { TailSpin } from 'react-loader-spinner';

const LoadingSpinner = () => {
  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: 'rgba(255, 255, 255, 0.7)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999,
    }}>
      <TailSpin color="#4fa94d" height={80} width={80} />
    </div>
  );
};

export default LoadingSpinner;
