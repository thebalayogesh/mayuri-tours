import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-elegant text-peacockBlue flex items-center gap-2"
        >
          {/* 🦚 Mayuri Tours */}
          <img src={logo} width={180} height={80} />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-gray-700 font-semibold">
          <Link to="/" className="hover:text-peacockBlue text-xl">
            Home
          </Link>
          <Link to="/about" className="hover:text-emerald-900 text-xl">
            About
          </Link>
          <Link to="/contact" className="hover:text-peacockBlue text-xl">
            Contact
          </Link>

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition text-sm"
          >
            WhatsApp Us
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-600 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Nav Links */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <Link
            to="/"
            className="block py-2 text-gray-700 hover:text-peacockBlue"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block py-2 text-gray-700 hover:text-peacockBlue"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="block py-2 text-gray-700 hover:text-peacockBlue"
            onClick={toggleMenu}
          >
            Contact
          </Link>

          {/* Mobile Whatsapp cta */}
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="block py-2 text-green-600 font-semibold rounded-2xl"
            onClick={toggleMenu}
          >
            💬 WhatsApp Us
          </a>
        </div>
      )}
    </header>
  );
}
