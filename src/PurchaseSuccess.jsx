import React from 'react';
import './PurchaseSuccess.css';

function PurchaseSuccess({ navigate }) {
  return (
    <div className="purchase-success-container">
      <button onClick={() => navigate('home')} className="success-back-button">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
      </button>
      <div className="success-content">
        <h1>Compra Realizada!</h1>
        <div className="success-icon-container">
          <svg className="success-icon" viewBox="0 0 100 100">
            <circle className="sun-bg" cx="50" cy="50" r="30" fill="#8bc34a" />
            <path className="sun-rays" d="M50 10 V30 M50 70 V90 M10 50 H30 M70 50 H90 M22 22 L36 36 M64 64 L78 78 M22 78 L36 64 M64 36 L78 22" stroke="#f39c12" strokeWidth="4" strokeLinecap="round" />
            <polyline className="checkmark" points="38,50 47,60 62,45" fill="none" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default PurchaseSuccess;