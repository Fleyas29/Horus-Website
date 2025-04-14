import React, { useEffect, useState } from 'react';
import { ShoppingCart, Search, Instagram, Facebook, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '../components/Header';

export default function HomePage() {
  // State for cart items and search input
  const [cartItems, setCartItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Track visits in localStorage (acts like cookies)
  useEffect(() => {
    try {
      const visits = parseInt(localStorage.getItem('horus_visits') || '0', 10);
      localStorage.setItem('horus_visits', String(visits + 1));
    } catch (err) {
      console.error('Cookie tracking error:', err);
    }
  }, []);

  // Handle search bar input
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    console.log('Searching:', e.target.value);
  };

  // Add item to cart and update localStorage
  const addToCart = (item) => {
    const updatedCart = [...cartItems, item];
    setCartItems(updatedCart);
    localStorage.setItem('horus_cart', JSON.stringify(updatedCart));
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      {/* Header */}
      <Header />

      {/* HERO SECTION */}
      <motion.section
        className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8 items-center bg-black text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Left-side Text and CTA */}
        <div>
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Step Into The Future of Streetwear
          </motion.h2>
          <motion.p
            className="text-lg mb-6"
            initial={{ x: -20 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Discover bold designs, elite comfort, and next-gen style from Horus. Built for motion. Crafted for impact.
          </motion.p>
          <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} transition={{ delay: 0.6, duration: 0.5 }}>
            <button
              onClick={() => addToCart({ name: 'Sample Product', id: 1 })}
              className="bg-white text-black px-6 py-2 rounded-full hover:scale-105 transition-transform"
            >
              Shop Now
            </button>
          </motion.div>
        </div>

        {/* Right-side Product Image */}
        <motion.div
          className="bg-white rounded-2xl h-96 w-full shadow-2xl flex items-center justify-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <span className="text-black">[ Your Product Image Here ]</span>
        </motion.div>
      </motion.section>

      {/* FOOTER */}
      <motion.footer
        className="bg-gray-100 py-6 px-8 flex justify-between items-center flex-wrap gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div>
          <p className="font-semibold">Follow Horus</p>
          <div className="flex gap-3 mt-2">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Instagram className="hover:text-pink-600" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Facebook className="hover:text-blue-600" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Twitter className="hover:text-blue-400" />
            </a>
          </div>
        </div>
        <div className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Horus. All rights reserved.
        </div>
      </motion.footer>
    </div>
  );
}
