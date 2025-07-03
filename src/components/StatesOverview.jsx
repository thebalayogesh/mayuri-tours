import React, { useState } from "react";
import GalleryModal from "./GalleryModal";

const states = [
  {
    name: "Tamil Nadu",
    image: "https://source.unsplash.com/600x400/?temple,tamilnadu",
    description:
      "Explore heritage temples, hill stations, and vibrant cities of Tamil Nadu.",
  },
  {
    name: "Kerala",
    image: "https://source.unsplash.com/600x400/?kerala,backwaters",
    description:
      "Relax in Kerala’s backwaters, beaches, and spice-scented hill towns.",
  },
  {
    name: "Andhra Pradesh",
    image: "https://source.unsplash.com/600x400/?araku,valley,andhra",
    description:
      "From Araku Valley to Tirupati — discover Andhra’s diverse charm.",
  },
  {
    name: "Karnataka",
    image: "https://source.unsplash.com/600x400/?hampi,karnataka",
    description:
      "Visit majestic forts, UNESCO sites and green hill stations in Karnataka.",
  },
];

export default function StatesOverview() {
  const [showModal, setShowModal] = useState(false);
  const [galleryImages, setGalleryImages] = useState([]);
  const [galleryTitle, setGalleryTitle] = useState("");

  const openGallery = (stateName) => {
    const imagesWithCaptions = [
      {
        src: `https://source.unsplash.com/800x600/?${stateName},tour&sig=1`,
        caption: "Scenic Landscape",
      },
      {
        src: `https://source.unsplash.com/800x600/?${stateName},tour&sig=2`,
        caption: "Cultural Heritage",
      },
      {
        src: `https://source.unsplash.com/800x600/?${stateName},tour&sig=3`,
        caption: "Traditional Cuisine",
      },
      {
        src: `https://source.unsplash.com/800x600/?${stateName},tour&sig=4`,
        caption: "Evening Sunset",
      },
    ];

    setGalleryImages(imagesWithCaptions);
    setGalleryTitle(`${stateName} Gallery`);
    setShowModal(true);
  };

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-sky-700">
          Explore Our Tour Destinations
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {states.map((state, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition"
            >
              <img
                src={state.image}
                alt={`${state.name} tour image`}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col justify-between h-[220px]">
                <h3 className="text-xl font-semibold mb-2 text-sky-700">
                  {state.name}
                </h3>
                <p className="text-sm text-gray-700 mb-4">
                  {state.description}
                </p>
                <button
                  onClick={() => openGallery(state.name)}
                  className="mt-auto bg-sky-600 hover:bg-sky-700 text-white text-sm px-4 py-2 rounded text-center"
                >
                  View Gallery
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ✅ Modal rendered outside the loop */}
        <GalleryModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          title={galleryTitle}
          images={galleryImages}
        />
      </div>
    </section>
  );
}
