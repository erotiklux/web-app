import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Shop from './pages/Shop';
import Purchases from './pages/Purchases';
import Balance from './pages/Balance';
import Profile from './pages/Profile';
import Support from './pages/Support';
import Preorder from './pages/Preorder';

export default function App() {
  const [cart, setCart] = useState([]);
  const cards = [
    {
      id: '497040',
      card_number: '497040',
      type: 'DEBIT',
      level: 'CLASSIC',
      bank_name: 'LA BANQUE POSTALE',
      city: 'REZE',
      price: 15
    }
  ];

  const addToCart = (card) => setCart([...cart, card]);
  const removeFromCart = (card) => setCart(cart.filter(c => c.id !== card.id));

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 pb-16">
        <Routes>
          <Route path="/" element={<Shop cards={cards} onAddToCart={addToCart} />} />
          <Route path="/preorder" element={<Preorder />} />
          <Route path="/purchases" element={<Purchases />} />
          <Route path="/balance" element={<Balance />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/support" element={<Support />} />
        </Routes>

        <div className="fixed bottom-0 w-full bg-white shadow-md flex justify-around text-xs py-2">
          <Link to="/">🛒 Open Shop</Link>
          <Link to="/preorder">📦 Preorder</Link>
          <Link to="/purchases">🎁 My purchases</Link>
          <Link to="/balance">💰 Balance</Link>
          <Link to="/support">🆘 Support</Link>
          <Link to="/profile">👤 Profile</Link>
        </div>
      </div>
    </Router>
  );
}