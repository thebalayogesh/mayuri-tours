import React from "react";

export default function CTASection() {
  return (
    <section className="bg-sky-600 py-12 text-white text-center px-4">
      <h3 className="text-2xl md:text-3xl font-bold mb-4">
        Ready to explore South India with comfort?
      </h3>
      <p className="mb-6">
        Contact us now for custom packages and instant booking help!
      </p>
      <a
        href="https://wa.me/919876543210?text=I'm%20interested%20in%20booking%20a%20tour"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white text-sky-700 font-semibold px-6 py-3 rounded shadow hover:bg-gray-100"
      >
        Chat on WhatsApp
      </a>
    </section>
  );
}
