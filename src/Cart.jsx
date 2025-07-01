import React from 'react';
import './Cart.css';

const PriceDisplay = ({ price }) => {
  const [reais, centavos] = price.split(',');
  return (
    <p className="price">
      R$ {reais}<sup>{centavos}</sup>
    </p>
  );
};

function Cart({ cartItems, savedItems, navigate, onRemoveFromCart, onSaveForLater, onMoveToCart, onRemoveFromSaved, onFinalizePurchase }) {
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="cart-container">
      <header className="cart-header">
        <button onClick={() => navigate('home')} className="cart-back-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
        </button>
        <div className="cart-search-bar">
          <input type="text" placeholder="Pesquisar no Boock Connect" />
        </div>
      </header>
      <nav className="cart-tabs">
        <a href="#" className="active">Carrinho</a>
        <a href="#">Lista</a>
        <a href="#">Continuar comprando</a>
      </nav>

      <main className="cart-content">
        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <h2>Nenhum item Selecionado</h2>
            <button className="checkout-button-disabled">Fechar pedido (0 itens)</button>
          </div>
        ) : (
          <>
            <button className="checkout-button" onClick={onFinalizePurchase}>Fechar pedido ({totalItems} {totalItems > 1 ? 'itens' : 'item'})</button>
            <div className="cart-items-container">
              <div className="cart-item-header">
                <input type="checkbox" />
                <label>Selecionar todos os itens</label>
              </div>
              {cartItems.map(item => (
                <div key={item.id} className="cart-item">
                  <input type="checkbox" className="item-checkbox" />
                  <img src={item.cover} alt={item.title} className="cart-item-cover" />
                  <div className="cart-item-info">
                    <h4>{item.title}</h4>
                    <p className="author">por {item.author}</p>
                    <p className="book-type">Capa comum</p>
                    <PriceDisplay price={item.price} />
                    <p className="shipping-info">Elegível para Frete GRÁTIS</p>
                    <p className="stock-info">Em estoque</p>
                    <div className="item-actions">
                      <div className="quantity-selector">
                        <button>-</button>
                        <span>{item.quantity}</span>
                        <button>+</button>
                      </div>
                      <button className="action-button" onClick={() => onRemoveFromCart(item.id)}>Excluir</button>
                      <button className="action-button" onClick={() => onSaveForLater(item)}>Salvar para mais tarde</button>
                      <button className="action-button">Compartilhar</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        <div className="info-box">
            <h4>Devolver é fácil</h4>
            <p>Devolução garantida de milhares de itens.</p>
        </div>

        <div className="saved-for-later-section">
            <h3>Salvo para mais tarde ({savedItems.length} produtos)</h3>
            {savedItems.map(item => (
                <div key={item.id} className="saved-item">
                    <img src={item.cover} alt={item.title} className="saved-item-cover" />
                    <div className="saved-item-info">
                        <h4>{item.title}{item.edition ? `: ${item.edition}`: ''}</h4>
                        <PriceDisplay price={item.price} />
                        <p className="shipping-info">Elegível para Frete GRÁTIS</p>
                        <p className="stock-info">Em estoque</p>
                        <div className="saved-item-actions">
                            <button className="action-button" onClick={() => onRemoveFromSaved(item.id)}>Excluir</button>
                            <button className="action-button primary" onClick={() => onMoveToCart(item)}>Mover para carrinho</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </main>

      <footer className="cart-footer">
        <button className="finalize-button" onClick={onFinalizePurchase}>Finalizar</button>
      </footer>
    </div>
  );
}

export default Cart;