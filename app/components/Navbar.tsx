"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { name: "About", href: "#about" },
    { name: "Gallery", href: "#gallery" },
    { name: "Events", href: "#events" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-white/70 shadow-lg border-b border-white/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* Logo Left */}
        <a
          href="/"
          className={`text-xl md:text-2xl font-extrabold tracking-widest transition-all duration-300 ${
            scrolled
              ? "bg-red-600 bg-clip-text text-transparent"
              : "text-white"
          }`}
        >
          <span className="flex items-center gap-2">
            <img src="/logo.png" alt="Logo" className="h-9 w-9" />
          
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`relative text-sm font-medium transition group ${
                scrolled ? "text-gray-800" : "text-white"
              }`}
            >
              {link.name}
              <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-gradient-to-r from-purple-600 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}

          <a
            href="/partnership"
            className="px-5 py-2 rounded-full bg-red-500 text-white text-sm font-semibold hover:scale-105 transition-transform"
          >
            Partner with us
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden ${scrolled ? "text-black" : "text-white"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white/90 backdrop-blur-xl px-6 py-8 space-y-6"
          >
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-center text-lg font-medium text-gray-800"
              >
                {link.name}
              </a>
            ))}

            <a
              href="partnership"
              onClick={() => setIsOpen(false)}
              className="block text-center px-6 py-3 rounded-full bg-red-500 text-white font-semibold"
            >
              Partner with us
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}