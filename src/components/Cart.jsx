import React from 'react';
import CardItem from './CardItem';

export default function Cart({ cartItems, onRemove, onBuy }) {
  return (
    <div className="p-4 min-h-screen bg-gray-100">
      <h1 className="text-xl font-bold mb-4">Cart</h1>
      {cartItems.map(item => (
        <CardItem key={item.id} card={item} inCart onRemove={onRemove} />
      ))}
      {cartItems.length > 0 && (
        <button onClick={onBuy} className="w-full mt-4 py-2 bg-blue-500 text-white rounded-xl">
          Buy {cartItems.length} items
        </button>
      )}
    </div>
  );
}