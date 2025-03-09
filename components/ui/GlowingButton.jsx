import React from 'react';
import './GlowingButton.css';

const GlowingButton = () => {
  return (
    <div className="button-container">
      <button className="glowing-button">
        <span className="button-text">Get Started</span>
      </button>
    </div>
  );
};

export default GlowingButton;