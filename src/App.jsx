import { Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home.jsx";
import About from "../src/pages/About.jsx";
import Gallery from "../src/pages/Gallery.jsx";
import FloatingWhatsAppButton from "./components/FloatingWhatsAppButton.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <FloatingWhatsAppButton />
    </>
  );
}

export default App;
