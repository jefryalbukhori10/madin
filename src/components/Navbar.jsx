// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react"; // ikon hamburger & close

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Deteksi scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-green-100/80 backdrop-blur-md shadow-lg" : "bg-green-100"
      } text-green-900`}
    >
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center space-x-3"
        >
          <img src="/logo.png" alt="Logo" className="h-10 w-10" />
          <span className="font-bold text-lg">Madrasah Subulussalam</span>
        </motion.div>

        {/* Menu Desktop */}
        <div className="hidden md:flex space-x-6 font-medium">
          <Link to="/" className="hover:text-gray-200 transition">
            Home
          </Link>
          <Link to="/about" className="hover:text-gray-200 transition">
            Tentang
          </Link>
          <Link to="/news" className="hover:text-gray-200 transition">
            Berita
          </Link>
          <Link to="/galeri" className="hover:text-gray-200 transition">
            Galeri
          </Link>
          <Link to="/contact" className="hover:text-gray-200 transition">
            Kontak
          </Link>
        </div>

        {/* Tombol Hamburger (Mobile) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-green-100/90 backdrop-blur-md px-6 py-4 space-y-4"
        >
          <Link
            to="/"
            className="block hover:text-gray-200 transition"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block hover:text-gray-200 transition"
            onClick={() => setIsOpen(false)}
          >
            Tentang
          </Link>
          <Link
            to="/programs"
            className="block hover:text-gray-200 transition"
            onClick={() => setIsOpen(false)}
          >
            Program
          </Link>
          <Link
            to="/news"
            className="block hover:text-gray-200 transition"
            onClick={() => setIsOpen(false)}
          >
            Berita
          </Link>
          <Link
            to="/contact"
            className="block hover:text-gray-200 transition"
            onClick={() => setIsOpen(false)}
          >
            Kontak
          </Link>
        </motion.div>
      )}
    </nav>
  );
}
