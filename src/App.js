import React from "react";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Element, scroller } from "react-scroll";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Sectors from "./components/Sectors/Sectors";
import Companies from "./components/Companies/Companies";
import ContactUs from "./components/ContactUs/ContactUs";
import UnderConstruction from "./components/UnderConstruction/UnderConstruction";
import "./i18n"; // Import the i18n configuration

const App = () => {
  const scrollToSection = (section) => {
    scroller.scrollTo(section, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <Router>
      <Navbar scrollToSection={scrollToSection} />
      <Routes>
        <Route
          path="/"
          element={
            <div className="main-content">
              <Element name="hero">
                <Hero />
              </Element>
              <Element name="about">
                <About />
              </Element>
              <Element name="sectors">
                <Sectors />
              </Element>
              <Element name="companies">
                <Companies />
              </Element>
              <Element name="contact">
                <ContactUs />
              </Element>
            </div>
          }
        />
        <Route path="/underconstruction" element={<UnderConstruction />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
