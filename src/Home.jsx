import React from 'react';
import './Home.css';
import BottomNav from './BottomNav';

function Home({ navigate }) {
  return (
    <div className="home-container">
      <header className="home-header-simple">
        <h1>BookConnect</h1>
        <p>Sua estante virtual</p>
      </header>
      <main className="home-content-simple">
        <h2>Bem-vindo!</h2>
        <p>Explore nosso catálogo ou veja seu perfil usando o menu abaixo.</p>
        <button className="home-button" onClick={() => navigate('catalog')}>Ver Catálogo</button>
      </main>
      <BottomNav navigate={navigate} activeScreen="home" />
    </div>
  );
}
export default Home;
