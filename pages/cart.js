import React, { useEffect, useState } from 'react';
import Header from '../components/Header';

export default function CartPage() {
  const [cartItems, setCartItems] = useState([]);

  // Retrieve cart data from localStorage on component mount
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('horus_cart') || '[]');
    setCartItems(storedCart);
  }, []);

  return (
    <div className="min-h-screen bg-white p-8 text-black">
      <Header />
      <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="space-y-2">
          {cartItems.map((item, index) => (
            <li key={index} className="border p-4 rounded shadow">
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
