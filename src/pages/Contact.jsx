import React from "react";
import { Phone, Mail, MessageCircle } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <Header />
      <section className="py-12 px-4 bg-white text-gray-800">
        <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2">
          {/* Left: Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-sky-700 mb-2">
                Contact Mayuri Tours & Travels
              </h1>
              <p className="text-sm text-gray-600">
                Reach us anytime for tour packages or bookings. We're happy to
                help!
              </p>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <Phone className="text-sky-600" size={20} />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="text-sky-600" size={20} />
                <span>mayuritours@example.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MessageCircle className="text-green-600" size={20} />
                <a
                  href="https://wa.me/919876543210?text=Hi%20Mayuri%20Tours%2C%20I%20want%20to%20plan%20a%20trip"
                  className="text-green-600 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg shadow text-sm">
              <h3 className="font-semibold text-sky-700 mb-1">
                Office Address:
              </h3>
              <p>
                Mayuri Cab Travel Tour,
                <br />
                67 Selva Ganapathy Avenue, 5th Cross St,
                <br />
                Seevaram, Perungudi, Chennai, Tamil Nadu 600096
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <form
            className="space-y-4"
            action="mailto:mayuritours@example.com"
            method="POST"
            encType="text/plain"
          >
            <div>
              <label className="block mb-1 text-sm font-medium">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Message</label>
              <textarea
                name="message"
                rows="4"
                required
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-sky-600 hover:bg-sky-700 text-white font-semibold py-2 rounded transition"
            >
              Send Email
            </button>

            <a
              href="https://wa.me/919876543210?text=Hi%20Mayuri%20Tours%2C%20I%20want%20to%20book%20a%20tour"
              className="block text-center mt-4 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full shadow-md transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              📲 Book via WhatsApp
            </a>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}
