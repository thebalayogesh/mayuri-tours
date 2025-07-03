import React, { useState, useEffect } from "react";

export default function GalleryModal({ isOpen, onClose, title, images = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Reset slideshow when modal is opened
  useEffect(() => {
    if (isOpen) setCurrentIndex(0);
  }, [isOpen]);

  // Auto-play every 5 seconds
  useEffect(() => {
    if (!isOpen || images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex + 1 < images.length ? prevIndex + 1 : 0
      );
    }, 3000); // 5 seconds

    return () => clearInterval(interval); // cleanup on close
  }, [isOpen, images.length]);

  if (!isOpen) return null;

  const currentImage = images[currentIndex];

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4">
      <div className="bg-white max-w-4xl w-full rounded-xl overflow-hidden shadow-lg relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 bg-red-500 hover:bg-red-600 text-white p-1.5 rounded"
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-xl font-bold text-center text-sky-700 py-4">
          {title}
        </h2>

        {/* Large Image */}
        <div className="w-full h-80 bg-gray-100 flex items-center justify-center">
          <img
            src={currentImage?.src}
            alt={currentImage?.caption || "Selected Image"}
            className="max-h-full max-w-full object-contain transition-all duration-500"
          />
        </div>

        {/* Caption */}
        <p className="text-sm text-gray-600 mt-2 mb-3 text-center px-4">
          {currentImage?.caption}
        </p>

        {/* Thumbnails */}
        <div className="flex overflow-x-auto gap-2 p-4 bg-gray-50">
          {images.map((img, index) => (
            <img
              key={index}
              src={img.src}
              alt={img.caption}
              onClick={() => setCurrentIndex(index)}
              className={`h-20 w-28 object-cover rounded border cursor-pointer transition ${
                index === currentIndex
                  ? "border-sky-600 ring-2 ring-sky-300"
                  : "border-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
