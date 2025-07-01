import React from 'react';
import './Notifications.css';
import BottomNav from './BottomNav';

const NotificationItem = ({ icon, title, description, time, read }) => (
    <div className={`notification-item ${!read ? 'unread' : ''}`}>
        <div className="notification-icon">{icon}</div>
        <div className="notification-details">
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
        <div className="notification-time">{time}</div>
    </div>
);

function Notifications({ navigate }) {
    const notificationsData = [
        { icon: '💰', title: 'Oferta Especial!', description: '20% de desconto em livros de Ficção Científica. Use o cupom: SCIFI20', time: 'Agora', read: false },
        { icon: '📖', title: 'Lançamento Imperdível', description: 'O novo livro de fantasia "As Crônicas de Valéria" já está disponível.', time: '2h atrás', read: false },
        { icon: '👥', title: 'Atividade de Amigos', description: 'Seu amigo João da Silva começou a ler "Duna".', time: 'Ontem', read: true },
        { icon: '🛒', title: 'Seu Carrinho', description: 'O livro "A Ascensão e Queda dos Dinossauros" está com estoque baixo. Garanta o seu!', time: '3d atrás', read: true },
        { icon: '📦', title: 'Pedido Enviado', description: 'Seu pedido #12345 foi enviado e chegará em breve.', time: '1sem atrás', read: true },
    ];

    return (
        <div className="notifications-container">
            <header className="notifications-header">
                <button className="notifications-back-button" onClick={() => navigate('home')}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                </button>
                <h1>Notificações</h1>
                <div className="header-placeholder"></div>
            </header>
            <main className="notifications-list">
                {notificationsData.map((notification, index) => (
                    <NotificationItem key={index} {...notification} />
                ))}
            </main>
            <BottomNav navigate={navigate} activeScreen="notifications" />
        </div>
    );
}

export default Notifications;