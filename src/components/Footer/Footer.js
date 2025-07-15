import React from "react";
import "./Footer.css";
import logo1 from "../../assets/logo1.webp";
import { useTranslation } from "react-i18next"; // Import translation hook

const Footer = () => {
  const { t } = useTranslation(); // Initialize translation hook

  return (
    <footer className="footer-container">
      <div className="footer-left">
        <img src={logo1} alt="BRG Logo" className="footer-logo" />
        <p className="footer-text">{t("footer.text")}</p>
      </div>
      <div className="footer-right">
        <h3 className="footer-title">{t("footer.contacts.title")}</h3>
        <p className="footer-contact">📧 {t("footer.contacts.email")}</p>
      </div>
    </footer>
  );
};

export default Footer;
