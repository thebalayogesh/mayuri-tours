import React from "react";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-sky-900 text-white pt-10 pb-6">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1 */}
        <div>
          <h3 className="text-lg font-bold mb-3">Mayuri Tours & Travels</h3>
          <p className="text-sm text-gray-300">
            Making your South India travel dreams come true with curated
            experiences, comfort, and care.
          </p>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="/" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="/gallery" className="hover:text-white">
                Gallery
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 - Contact */}
        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <ul className="text-sm text-gray-300 space-y-2">
            <li className="flex items-start gap-2">
              <Phone size={16} />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-start gap-2">
              <Mail size={16} />
              <span>mayuritours@example.com</span>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={16} />
              <span>Coimbatore, Tamil Nadu, India</span>
            </li>
          </ul>
        </div>

        {/* Column 4 - Social */}
        <div>
          <h4 className="font-semibold mb-3">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white">
              <Facebook />
            </a>
            <a href="#" className="hover:text-white">
              <Instagram />
            </a>
          </div>
          <p className="text-sm text-gray-400 mt-4">#ExploreWithMayuri</p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-sky-700 mt-8 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Mayuri Tours & Travels. All rights
        reserved.
      </div>
    </footer>
  );
}
