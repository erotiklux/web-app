import React from 'react';
import Banner from '../components/Banner';
import CardItem from '../components/CardItem';

export default function Shop({ cards, onAddToCart }) {
  return (
    <div className="p-2">
      <Banner />
      <h2 className="text-sm text-gray-700 mb-2">16 items</h2>
      {cards.map(card => (
        <CardItem key={card.id} card={card} onAdd={onAddToCart} />
      ))}
    </div>
  );
}