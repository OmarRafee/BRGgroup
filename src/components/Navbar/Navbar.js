import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";
import "./Navbar.css";
import logo1 from "../../assets/logo1.webp";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { i18n, t } = useTranslation();
  const [lang, setLang] = useState(i18n.language);

  // Custom Arabic translations that can be edited
  const arabicTranslations = {
    about: "من نحن",
    sectors: "قطاعاتنا",
    companies: "شركاتنا",
    contact: "اتصل بنا",
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
    document.body.classList.toggle("arabic", newLang === "ar");

    setLang(newLang);
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <ul className="nav-links left-links">
        <li>
          <Link to="about" smooth={true} duration={500} offset={-100}>
            {i18n.language === "en" ? "About" : arabicTranslations.about}
          </Link>
        </li>
        <li>
          <Link to="sectors" smooth={true} duration={500} offset={-100}>
            {i18n.language === "en"
              ? "Our Sectors"
              : arabicTranslations.sectors}
          </Link>
        </li>
      </ul>
      <div className="logo">
        <Link to="hero" smooth={true} duration={500} offset={-100}>
          <img src={logo1} alt="BRG Logo" />
        </Link>
      </div>
      <ul className="nav-links right-links">
        <li>
          <Link to="companies" smooth={true} duration={500} offset={-100}>
            {i18n.language === "en"
              ? "Our Companies"
              : arabicTranslations.companies}
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500} offset={-100}>
            {i18n.language === "en" ? "Contact Us" : arabicTranslations.contact}
          </Link>
        </li>
      </ul>

      <div className="lang-switch-container">
        <input
          type="checkbox"
          id="lang-switch"
          className="lang-switch-input"
          onChange={toggleLanguage}
          checked={lang === "ar"}
        />
        <label htmlFor="lang-switch" className="lang-switch-label">
          <span className="lang-switch-text en-text">EN</span>
          <span className="lang-switch-slider">
            <span className="slider-indicator"></span>
          </span>
          <span className="lang-switch-text ar-text">AR</span>
        </label>
      </div>
    </nav>
  );
};

export default Navbar;
