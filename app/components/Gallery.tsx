"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Gallery() {
  const images = Array.from({ length: 12 }, (_, i) => `/${i + 1}.jpeg`);
  const imagesPerPage = 6;
  const totalPages = Math.ceil(images.length / imagesPerPage);

  const [currentPage, setCurrentPage] = useState(0);

  const handlePrev = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const startIndex = currentPage * imagesPerPage;
  const currentImages = images.slice(startIndex, startIndex + imagesPerPage);

  return (
    <section className="py-24 bg-gray-50 px-6 md:px-16 relative">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-16"
      >
        Outreach Moments
      </motion.h2>

      {/* Carousel Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-8">
        {currentImages.map((src, index) => (
          <motion.div
            key={src}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-3xl shadow-lg group"
          >
            <img
              src={src}
              alt={`Outreach ${startIndex + index + 1}`}
              className="w-full h-72 object-cover group-hover:scale-110 transition duration-700"
            />
          </motion.div>
        ))}
      </div>

      {/* Carousel Controls */}
      <div className="flex justify-center gap-6">
        <button
          onClick={handlePrev}
          className="p-3 rounded-full bg-white shadow-lg hover:bg-gray-200 transition"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={handleNext}
          className="p-3 rounded-full bg-white shadow-lg hover:bg-gray-200 transition"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Page Indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: totalPages }).map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full transition ${
              i === currentPage ? "bg-purple-600" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
}