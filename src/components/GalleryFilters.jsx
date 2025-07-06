import React, { useState } from "react";

// Sample images with categories
const allImages = [
  {
    id: 1,
    url: "https://picsum.photos/id/1015/800/500",
    category: "Tamil Nadu",
    caption: "Sunset at Kanyakumari",
  },
  {
    id: 2,
    url: "https://picsum.photos/id/1016/800/500",
    category: "Kerala",
    caption: "Alleppey Backwaters",
  },
  {
    id: 3,
    url: "https://picsum.photos/id/1011/800/500",
    category: "Beach",
    caption: "Golden Beach, Chennai",
  },
  {
    id: 4,
    url: "https://picsum.photos/id/1018/800/500",
    category: "Tamil Nadu",
    caption: "Ooty Tea Gardens",
  },
  {
    id: 5,
    url: "https://picsum.photos/id/1022/800/500",
    category: "Kerala",
    caption: "Munnar Misty Hills",
  },
  {
    id: 6,
    url: "https://picsum.photos/id/1021/800/500",
    category: "Beach",
    caption: "Calicut Shoreline",
  },
];

const categories = ["All", "Tamil Nadu", "Kerala", "Beach"];

export default function GalleryFilters() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredImages =
    activeFilter === "All"
      ? allImages
      : allImages.filter((img) => img.category === activeFilter);

  return (
    <section className="py-12 px-4 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-sky-700 mb-6">
        Explore Tour Moments
      </h2>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`px-4 py-2 rounded-full border text-sm font-medium transition ${
              activeFilter === cat
                ? "bg-sky-600 text-white border-sky-600"
                : "bg-white text-sky-700 border-sky-300 hover:bg-sky-50"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
        {filteredImages.map((img) => (
          <div
            key={img.id}
            className="overflow-hidden rounded-xl shadow hover:shadow-md transition"
          >
            <img
              src={img.url}
              alt={img.caption}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <p className="text-sm text-gray-700 text-center">{img.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
