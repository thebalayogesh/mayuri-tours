import React from "react";
import { useParams } from "react-router-dom";

export default function StateGallery() {
  const { stateSlug } = useParams();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-peacockBlue capitalize">
        {stateSlug.replace("-", " ")} Gallery
      </h1>

      <p className="text-gray-600 mt-2 mb-6">
        Welcome to the photo gallery of {stateSlug.replace("-", " ")} tours.
      </p>

      {/* Replace below with real images for that state */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6].map((n) => (
          <img
            key={n}
            src={`https://source.unsplash.com/400x300/?${stateSlug},travel&sig=${n}`}
            alt={`${stateSlug} tour`}
            className="rounded shadow-md object-cover w-full h-full"
          />
        ))}
      </div>
    </div>
  );
}
