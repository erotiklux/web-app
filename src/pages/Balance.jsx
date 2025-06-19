import React from 'react';

export default function Balance() {
  const balance = 0.00;

  const handleTopUp = () => {
    // appeler Oxapay
    alert('Redirect to Oxapay...');
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">Balance</h1>
      <p className="text-green-600 text-lg font-bold mb-4">{balance.toFixed(2)}€</p>
      <button onClick={handleTopUp} className="bg-green-500 text-white px-4 py-2 rounded-xl">
        Top up via Oxapay
      </button>
    </div>
  );
}