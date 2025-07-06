import React from "react";
import AboutSection from "../components/AboutSection";
import WhyChooseUs from "../components/WhyChooseUs";
import CTASection from "../components/CTASection";
import TopBar from "../components/TopBar";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
  return (
    <main>
      <TopBar />
      <Header />
      <AboutSection />
      <WhyChooseUs />
      <CTASection />
      <Footer />
    </main>
  );
}
