import React from 'react';

export default function CardItem({ card, onAdd, onRemove, inCart }) {
  return (
    <div className="flex items-center justify-between bg-white shadow rounded-xl p-2 mb-2">
      <div className="flex items-center gap-2">
        <img src="/src/assets/visa.png" className="h-8" />
        <div>
          <p className="text-xs font-bold">{card.card_number} <span className="bg-yellow-300 text-[10px] px-1 py-[1px] rounded-full ml-1">Fast buy</span></p>
          <p className="text-xs">Type: {card.type}</p>
          <p className="text-xs">Level: {card.level}</p>
          <p className="text-xs">Bank: {card.bank_name}</p>
          <p className="text-xs">City: {card.city}</p>
        </div>
      </div>
      <div className="flex items-center gap-1">
        <p className="text-sm text-green-600">{card.price}€</p>
        {!inCart ? (
          <button onClick={() => onAdd(card)} className="bg-blue-500 text-white rounded-full w-6 h-6">+</button>
        ) : (
          <button onClick={() => onRemove(card)} className="bg-red-500 text-white rounded-full w-6 h-6">−</button>
        )}
      </div>
    </div>
  );
}