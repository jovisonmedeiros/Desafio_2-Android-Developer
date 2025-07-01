import React from 'react';
import './WelcomeScreen.css';
import Logo from './Logo';

function WelcomeScreen({ navigate }) {
  return (
    <div className="welcome-container">
      <div className="welcome-logo-area">
        <Logo />
      </div>
      <div className="welcome-card">
        <h2>Bem-vindo ao BookConnect</h2>
        <button className="welcome-btn primary" onClick={() => navigate('login')}>ENTRAR</button>
        <button className="welcome-btn secondary" onClick={() => navigate('cadastro')}>CRIAR NOVA CONTA</button>
      </div>
    </div>
  );
}

export default WelcomeScreen;