import React, { useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Gallery from "./pages/Gallery.jsx";
import Faq from "./pages/Faq.jsx";
import Contact from "./pages/Contact.jsx";

// Components
import NavbarSection from "./components/NavbarSection.jsx";
import FooterSection from "./components/FooterSection.jsx";

// Styles & AOS
import AOS from "aos";
import "aos/dist/aos.css";
import "./styles/App.css";
import "./styles/index.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);
  return (
    <>
       <Router>
        <NavbarSection />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <FooterSection />
      </Router>
    </>
  );
}

export default App;
