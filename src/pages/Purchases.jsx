import React from 'react';

export default function Purchases() {
  const purchases = []; // à remplacer par données backend

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">My Purchases</h1>
      {purchases.length === 0 ? (
        <p className="text-sm text-gray-600">Nothing found</p>
      ) : (
        purchases.map(item => (
          <div key={item.id} className="bg-white p-3 shadow rounded-xl mb-2">
            <p className="text-xs">{item.card_number} - {item.bank_name}</p>
          </div>
        ))
      )}
    </div>
  );
}