'use client';

import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import { Bebas_Neue } from 'next/font/google';

const bebas = Bebas_Neue({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-bebas',
  });

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className="fixed w-screen top-0 z-20 bg-black bg-opacity-20 text-white">
      <div className="max-w-9xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 md:items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="#start" className={`${bebas.variable} font-sans text-2xl md:text-4xl font-bold`}>
              MG
            </Link>
          </div>
          <div className="hidden md:flex space-x-4">
            <Link href="#about" className={`${bebas.variable} font-sans text-4xl font-bold hover:text-red-600`}>About</Link>
            <Link href="#projects" className={`${bebas.variable} font-sans text-4xl font-bold hover:text-red-600`}>Projects</Link>
            <Link href="#contact" className={`${bebas.variable} font-sans text-4xl font-bold hover:text-red-600`}>Contact</Link>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setNavOpen(!navOpen)} className="text-white focus:outline-none">
              {navOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>
      </div>

      {navOpen && (
        <div className="md:hidden">
          <div className="space-y-4 bg-black bg-opacity-70 p-4">
            <Link href="#about" className={`${bebas.variable} font-sans text-3xl font-bold hover:text-red-600 block text-center`} onClick={() => setNavOpen(false)}>About</Link>
            <Link href="#projects" className={`${bebas.variable} font-sans text-3xl font-bold hover:text-red-600 block text-center`} onClick={() => setNavOpen(false)}>Projects</Link>
            <Link href="#contact" className={`${bebas.variable} font-sans text-3xl font-bold hover:text-red-600 block text-center`} onClick={() => setNavOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
