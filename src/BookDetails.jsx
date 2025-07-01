import React from 'react';
import './BookDetails.css';
import StarRating from './StarRating';

function BookDetails({ book, navigate, onAddToCart }) {
  if (!book) {
    return <div>Carregando...</div>;
  }

  const handleAddToCartClick = () => {
    onAddToCart(book);
    navigate('cart');
  }

  return (
    <div className="details-container">
      <button onClick={() => navigate('home')} className="details-back-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
      </button>
      
      <main className="details-content">
        <div className="details-top-section">
          <div className="details-cover-img">
            <img src={book.cover} alt={book.title} />
          </div>
          <div className="details-info">
            <h2>{book.title}</h2>
            <p className="author">{book.author}</p>
            <StarRating rating={book.rating} reviews={book.reviews} />
            <a href="#" className="add-to-list">Adicionar à Lista</a>
          </div>
        </div>

        <button className="download-sample-btn">Fazer Download da Amostra</button>

        <div className="description-section">
          <p>{book.description}</p>
        </div>

        <div className="customer-reviews">
          <h3>Avaliações dos Clientes</h3>
          <div className="review">
            <p className="reviewer-name">Anderson Antônio de Menezes</p>
            <div className="review-rating">
              <StarRating rating={5} />
              <span>Compra Verificada</span>
            </div>
            <h4>MELHOR LIVRO, SUPER RECOMENDO</h4>
            <p>Para quem gosta ou não conhece sobre a vida na terra, e todos os dinossauros brasileiros, eu super recomendo este livro que se tornou meu livro favorito...</p>
          </div>
        </div>
      </main>
      <footer className="details-footer">
        <button className="add-to-cart-btn" onClick={handleAddToCartClick}>Adicionar Carrinho</button>
      </footer>
    </div>
  );
}

export default BookDetails;
