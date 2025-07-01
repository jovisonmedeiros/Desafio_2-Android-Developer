import React from 'react';
import './StarRating.css';

const StarRating = ({ rating, reviews }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="star-rating">
      {[...Array(fullStars)].map((_, i) => <span key={`full-${i}`}>⭐</span>)}
      {halfStar && <span key="half">🌟</span>}
      {[...Array(emptyStars)].map((_, i) => <span key={`empty-${i}`}>☆</span>)}
      {reviews && <span className="reviews-count">{reviews}</span>}
    </div>
  );
};

export default StarRating;