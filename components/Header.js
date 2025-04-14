import React from 'react';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 shadow bg-white sticky top-0 z-50">
      {/* Brand Name (or replace with <Image> if using logo) */}
      <Link href="/">
        <h1 className="text-3xl font-bold tracking-widest cursor-pointer">HORUS</h1>
      </Link>

      {/* Navigation Links */}
      <nav className="flex gap-4">
        <Link href="/about" className="hover:underline text-sm font-medium">About</Link>
        <Link href="/cart" className="flex items-center gap-1">
          <ShoppingCart size={18} />
          <span className="text-sm font-medium">Cart</span>
        </Link>
      </nav>
    </header>
  );
}
