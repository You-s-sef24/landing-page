"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 grid grid-cols-2 md:grid-cols-3 items-center bg-white font-bold text-gray-500 p-3 z-50 border-b border-gray-200 dark:border-neutral-700 shadow-lg">
      <h3 className="text-2xl text-purple-600">Teqneia</h3>

      <div className="hidden md:flex gap-4 justify-center">
        <a href="#features" className="hover:text-purple-600 transition-all">
          Features
        </a>
        <a href="#about" className="hover:text-purple-600 transition-all">
          About
        </a>
        <a href="#contact" className="hover:text-purple-600 transition-all">
          Contact
        </a>
      </div>

      <div className="flex items-center justify-end gap-2">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden px-4 py-2 text-purple-600 rounded focus:outline-none hover:text-purple-600 transition-all cursor-pointer"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="m7.76 14.83-2.83 2.83 1.41 1.41 2.83-2.83 2.12-2.12.71-.71.71.71 1.41 1.42 3.54 3.53 1.41-1.41-3.53-3.54-1.42-1.41-.71-.71 5.66-5.66-1.41-1.41L12 10.59 6.34 4.93 4.93 6.34 10.59 12l-.71.71z"></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M3 5h18v2H3zm0 6h18v2H3zm0 6h18v2H3z"></path>
            </svg>
          )}
        </button>

        <Link
          href="/login"
          className="hidden md:block border px-4 py-2 text-purple-600 rounded focus:outline-none hover:bg-purple-600 hover:text-white transition-all"
        >
          Login
        </Link>
      </div>

      {isOpen && (
        <div className="md:hidden fixed top-16 left-0 w-screen bg-neutral-200/50 border-t border-gray-200 dark:border-neutral-700 shadow-lg z-50">
          <a
            href="#features"
            className="block px-6 py-4 text-purple-600 hover:bg-purple-700 hover:text-white transition-all duration-200"
            onClick={() => setIsOpen(false)}
          >
            Features
          </a>
          <a
            href="#about"
            className="block px-6 py-4 text-purple-600 hover:bg-purple-700 hover:text-white transition-all duration-200"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a
            href="#contact"
            className="block px-6 py-4 text-purple-600 hover:bg-purple-700 hover:text-white transition-all duration-200"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
          <Link
            href="/login"
            className="block px-6 py-4 text-black hover:bg-purple-700 hover:text-white transition-all duration-200"
            onClick={() => setIsOpen(false)}
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
}
