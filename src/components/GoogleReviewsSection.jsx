import React from "react";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Divya S.",
    location: "Chennai, Tamil Nadu",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    review:
      "The trip was absolutely magical! The team arranged everything with care.",
  },
  {
    name: "Raj K.",
    location: "Coimbatore, TN",
    image: "https://randomuser.me/api/portraits/men/35.jpg",
    rating: 5,
    review:
      "I never imagined Kerala backwaters would be so peaceful and beautiful.",
  },
  {
    name: "Meena R.",
    location: "Bengaluru, Karnataka",
    image: "https://randomuser.me/api/portraits/women/55.jpg",
    rating: 4,
    review:
      "We loved every moment of our honeymoon with Mayuri Tours. Perfectly organized!",
  },
  {
    name: "Sathish P.",
    location: "Hyderabad, AP",
    image: "https://randomuser.me/api/portraits/men/60.jpg",
    rating: 5,
    review:
      "Prompt service, friendly guides and unforgettable views. Will book again!",
  },
];

export default function GoogleReviewsSection() {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-sky-700 mb-2">
        What People Say on Google
      </h2>
      <p className="text-center text-gray-600 mb-10">
        Verified traveler experiences that speak for themselves ⭐
      </p>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto">
        {reviews.map((r, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow hover:shadow-md transition border border-gray-200"
          >
            <div className="flex items-center gap-4 mb-3">
              <img
                src={r.image}
                alt={r.name}
                className="w-12 h-12 rounded-full object-cover border"
              />
              <div>
                <p className="font-semibold text-sky-700">{r.name}</p>
                <p className="text-xs text-gray-500">{r.location}</p>
              </div>
            </div>

            {/* ⭐ Rating */}
            <div className="flex items-center mb-2">
              {Array.from({ length: 5 }, (_, i) => (
                <Star
                  key={i}
                  size={16}
                  className={`${
                    i < r.rating ? "text-yellow-400" : "text-gray-300"
                  }`}
                  fill={i < r.rating ? "#facc15" : "none"}
                />
              ))}
            </div>

            <p className="text-sm text-gray-700 leading-relaxed">
              "{r.review}"
            </p>
          </div>
        ))}
      </div>

      {/* Optional CTA */}
      <div className="text-center mt-10">
        <a
          href="https://www.google.com/search?q=mayuri+tours+reviews"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-600 hover:bg-green-700 text-white text-sm px-6 py-3 rounded-full transition"
        >
          🌟 Read More on Google
        </a>
      </div>
    </section>
  );
}
