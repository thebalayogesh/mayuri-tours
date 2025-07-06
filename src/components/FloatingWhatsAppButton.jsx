import React from "react";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsAppButton() {
  return (
    <a
      href="https://wa.me/919876543210?text=Hi%20Mayuri%20Tours%2C%20I%20want%20to%20plan%20a%20trip!"
      className="fixed bottom-5 right-5 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
}
