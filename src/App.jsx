import React, { useState, useEffect } from 'react';
import Login from './Login';
import Cadastro from './Cadastro';
import Home from './Home';
import Catalog from './Catalog';
import BookDetails from './BookDetails';
import Cart from './Cart';
import PurchaseSuccess from './PurchaseSuccess';
import Profile from './Profile';
import Notifications from './Notifications';
import SplashScreen from './SplashScreen';
import WelcomeScreen from './WelcomeScreen';

function App() {
  const [currentPage, setCurrentPage] = useState('splash');
  const [selectedBook, setSelectedBook] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [savedItems, setSavedItems] = useState([
    { id: 1, title: 'Arrume a Sua Cama', author: 'William H. McRaven', cover: 'https://covers.openlibrary.org/b/id/8774893-L.jpg', price: '125,30', edition: '2ª Edição' }
  ]);

  useEffect(() => {
    if (currentPage === 'splash') {
      const timer = setTimeout(() => {
        setCurrentPage('welcome');
      }, 2500); // Duração da splash screen
      return () => clearTimeout(timer);
    }
  }, [currentPage]);

  const booksData = {
    suaBiblioteca: [
      { id: 1, title: 'Arrume a Sua Cama', author: 'William H. McRaven', cover: 'https://covers.openlibrary.org/b/id/8774893-L.jpg', rating: 4.8, reviews: 210, price: '125,30', description: 'Pequenas coisas que podem mudar a sua vida... e talvez o mundo.' },
      { id: 2, title: 'O Guia Completo dos Dinossauros do Brasil', author: 'Luiz E. Anelli', cover: 'https://covers.openlibrary.org/b/id/8724403-L.jpg', rating: 4.9, reviews: 145, price: '140,25', description: 'Uma jornada fascinante pela pré-história do Brasil, revelando as criaturas incríveis que habitaram nosso território.' },
      { id: 3, title: 'Astrofísica para Apressados', author: 'Neil deGrasse Tyson', cover: 'https://covers.openlibrary.org/b/id/8389440-L.jpg', rating: 4.7, reviews: 350, price: '99,90', description: 'O cosmos explicado de forma clara e concisa para quem não tem tempo a perder.' },
    ],
    preferidos: [
      { id: 4, title: 'Alien', author: 'Alan Dean Foster', cover: 'https://covers.openlibrary.org/b/id/10521630-L.jpg', rating: 4.6, reviews: 180, price: '89,00', description: 'No espaço, ninguém pode ouvir você gritar. A novelização do clássico filme de terror e ficção científica.' },
      { id: 5, title: 'Trainspotting', author: 'Irvine Welsh', cover: 'https://covers.openlibrary.org/b/id/10022933-L.jpg', rating: 4.5, reviews: 220, price: '75,50', description: 'Um olhar cru e sem filtros sobre a vida de um grupo de jovens viciados em heroína em Edimburgo.' },
      { id: 6, title: 'Outros Jeitos de Usar a Boca', author: 'Rupi Kaur', cover: 'https://covers.openlibrary.org/b/id/8282116-L.jpg', rating: 4.8, reviews: 400, price: '65,00', description: 'Uma coletânea de poesias sobre amor, perda, trauma, cura e feminilidade.' },
    ],
    verTudo: [
      { id: 7, title: 'O Assassinato no Expresso do Oriente', author: 'Agatha Christie', cover: 'https://covers.openlibrary.org/b/id/13175149-L.jpg', rating: 4.9, reviews: 500, price: '110,00', description: 'Hercule Poirot precisa descobrir quem é o assassino entre os passageiros de um trem luxuoso parado pela neve.' },
      { id: 8, title: 'Os Sete', author: 'André Vianco', cover: 'https://covers.openlibrary.org/b/id/9253921-L.jpg', rating: 4.7, reviews: 190, price: '95,80', description: 'Uma saga de vampiros ambientada no Brasil, misturando suspense, terror e história.' },
      { id: 9, title: 'A Amiga Genial', author: 'Elena Ferrante', cover: 'https://covers.openlibrary.org/b/id/8258296-L.jpg', rating: 4.6, reviews: 330, price: '130,00', description: 'A história de uma amizade complexa e intensa entre duas mulheres que crescem em um bairro pobre de Nápoles.' },
      { id: 10, title: 'Harry Potter e a Pedra Filosofal', author: 'J.K. Rowling', cover: 'https://covers.openlibrary.org/b/id/8264749-L.jpg', rating: 5.0, reviews: 1200, price: '150,00', description: 'A vida de um garoto órfão muda para sempre quando ele descobre que é um bruxo e é convidado para estudar em Hogwarts.' },
    ]
  }

  const handleAddToCart = (bookToAdd) => {
    setCartItems((prevItems) => {
      const isItemInCart = prevItems.find(item => item.id === bookToAdd.id);
      if (isItemInCart) {
        return prevItems.map(item =>
          item.id === bookToAdd.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...bookToAdd, quantity: 1 }]; 
    });
  };

  const handleRemoveFromCart = (bookId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== bookId));
  };

  const handleSaveForLater = (bookToSave) => {
    setSavedItems(prev => {
        const isSaved = prev.find(item => item.id === bookToSave.id);
        if (isSaved) return prev;
        return [...prev, bookToSave];
    });
    handleRemoveFromCart(bookToSave.id);
  };

  const handleMoveToCart = (bookToMove) => {
    handleAddToCart(bookToMove);
    setSavedItems(prev => prev.filter(item => item.id !== bookToMove.id));
  };

  const handleRemoveFromSaved = (bookId) => {
    setSavedItems(prev => prev.filter(item => item.id !== bookId));
  };

  const handleFinalizePurchase = () => {
    setCartItems([]);
    navigate('purchaseSuccess');
  };

  const handleLogout = () => {
    // Aqui você pode adicionar lógica para limpar dados de sessão
    navigate('welcome');
  };
  
  const navigate = (page, data = null) => {
    setCurrentPage(page);
    if (data) {
        setSelectedBook(data);
    }
  };

  switch (currentPage) {
    case 'splash':
        return <SplashScreen />;
    case 'welcome':
        return <WelcomeScreen navigate={navigate} />;
    case 'home':
      return <Home navigate={navigate} />;
    case 'catalog':
      return <Catalog navigate={navigate} booksData={booksData} />;
    case 'profile':
      return <Profile navigate={navigate} onLogout={handleLogout} />;
    case 'notifications':
      return <Notifications navigate={navigate} />;
    case 'cadastro':
      return <Cadastro navigate={navigate} />;
    case 'details':
      return <BookDetails book={selectedBook} navigate={navigate} onAddToCart={handleAddToCart} />;
    case 'cart':
      return <Cart 
                cartItems={cartItems} 
                savedItems={savedItems} 
                navigate={navigate}
                onRemoveFromCart={handleRemoveFromCart}
                onSaveForLater={handleSaveForLater}
                onMoveToCart={handleMoveToCart}
                onRemoveFromSaved={handleRemoveFromSaved}
                onFinalizePurchase={handleFinalizePurchase}
             />;
    case 'purchaseSuccess':
        return <PurchaseSuccess navigate={navigate} />;
    case 'login':
      return <Login navigate={navigate} onLoginSuccess={() => navigate('home')} />;
    default:
        return <WelcomeScreen navigate={navigate} />;
  }
}

export default App;