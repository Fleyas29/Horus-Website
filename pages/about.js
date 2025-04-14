import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <motion.section
        className="p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold mb-4">About Horus</h2>
        <p className="text-lg leading-7 mb-6">
          Horus is not just a clothing brand. It’s a movement. Designed for rebels, creators, and visionaries.
          Built for motion. Crafted for impact.
        </p>

        {/* Contact Us */}
        <div className="rounded-xl border-2 border-black p-6 shadow-xl bg-gray-50">
          <h3 className="text-2xl font-semibold mb-2">Contact Us</h3>
          <p>Got questions, collabs, or feedback?</p>
          <p>
            Email us at:{' '}
            <a href="mailto:horusbrandal@gmail.com" className="text-blue-600 hover:underline">
              horusbrandal@gmail.com
            </a>
          </p>
        </div>
      </motion.section>
    </div>
  );
}
