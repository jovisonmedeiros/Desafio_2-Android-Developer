import React from 'react';
import './SplashScreen.css';
import Logo from './Logo';

function SplashScreen() {
  return (
    <div className="splash-container">
      <div className="splash-logo">
        <Logo />
      </div>
    </div>
  );
}

export default SplashScreen;