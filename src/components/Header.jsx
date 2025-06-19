import React from 'react';

export default function Header({ cartCount, onViewCart }) {
  return (
    <div className="flex justify-between items-center p-2 bg-white shadow-md sticky top-0 z-10">
      <input type="text" placeholder="Search..." className="bg-gray-100 text-sm rounded-full px-3 py-1 w-2/3" />
      <button onClick={onViewCart} className="relative text-sm bg-blue-100 px-3 py-1 rounded-full">
        Go to cart ({cartCount})
      </button>
    </div>
  );
}