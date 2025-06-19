import React from 'react';

export default function Banner() {
  return (
    <div className="rounded-xl overflow-hidden bg-white shadow-md mb-4">
      <div className="bg-yellow-400 text-xs font-bold px-2 py-1 inline-block rounded-br-xl">
        🔔 OUR BESTSELLERS 🔔
      </div>
      <img src="/src/assets/bestseller.png" alt="Bannière" className="w-full h-32 object-cover"/>
      <div className="p-2 text-sm">
        <p className="font-bold">16 hot cards 🔥 <span className="text-green-500">15€</span></p>
        <p className="text-xs text-gray-600">CLASSIC</p>
      </div>
    </div>
  );
}