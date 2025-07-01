import React from 'react';
import './Catalog.css';
import BottomNav from './BottomNav';

const BookSection = ({ title, books, showVerTudoLink, navigate }) => (
  <section className="book-section">
    <div className="section-header">
      <h2>{title}</h2>
      {showVerTudoLink && <a href="#">Ver tudo</a>}
    </div>
    <div className="book-carousel">
      {books.map((book, index) => (
        <div key={index} className="book-card" onClick={() => navigate('details', book)}>
          <img src={book.cover} alt={book.title} onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/120x180/cccccc/ffffff?text=Error'; }} />
        </div>
      ))}
    </div>
  </section>
);

function Catalog({ navigate, booksData }) {
  return (
    <div className="catalog-container">
      <header className="catalog-header">
        <div className="header-top">
          <button className="back-button-catalog" onClick={() => navigate('home')}> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg> </button>
          <div className="search-bar"> <input type="text" placeholder="Pesquisar no Boock Connect" /> </div>
        </div>
        <nav className="category-tabs"> <a href="#" className="active">Explorar</a> <a href="#">Todos</a> <a href="#">Ficção</a> <a href="#">Romance</a> <a href="#">História</a> </nav>
      </header>
      <main className="catalog-content">
        <BookSection title="Sua Biblioteca" books={booksData.suaBiblioteca} navigate={navigate} />
        <BookSection title="Preferidos entre novos clientes" books={booksData.preferidos} showVerTudoLink={true} navigate={navigate} />
        
        <section className="book-section">
          <div className="book-carousel">
            {booksData.verTudo.map((book, index) => (
              <div key={index} className="book-card" onClick={() => navigate('details', book)}>
                <img src={book.cover} alt={book.title} onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/120x180/cccccc/ffffff?text=Error'; }} />
              </div>
            ))}
          </div>
          <div className="section-footer">
            <a href="#">Ver tudo</a>
          </div>
        </section>

      </main>
      <BottomNav navigate={navigate} activeScreen="catalog" />
    </div>
  );
}
export default Catalog;