import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"; // Import translation hook
import "./Companies.css";
import egyptFlag from "../../assets/egyptFlag.webp";
import ksaFlag from "../../assets/ksaFlag.webp";
import uaeFlag from "../../assets/uaeFlag.webp";
import company1 from "../../assets/company1.jpeg"; // Egypt
import company2 from "../../assets/company2.webp"; // Egypt
import company3 from "../../assets/company3.webp"; // Egypt
import company4 from "../../assets/company4.webp"; // KSA
import company5 from "../../assets/company5.jpeg"; // KSA
import company6 from "../../assets/company6.webp"; // UAE
import company7 from "../../assets/company7.webp"; // Egypt

const Companies = () => {
  const { t } = useTranslation(); // Initialize translation hook
  const [hoveredCountry, setHoveredCountry] = useState(null);

  return (
    <div className="companies-container">
      <div className="loaction-background">
        <h1 className="companies-title">{t("companies.where_are_we")}</h1>
        <div className="locations">
          <div className="background-overlay"></div>
          <div
            className="location"
            onMouseEnter={() => setHoveredCountry("egypt")}
            onMouseLeave={() => setHoveredCountry(null)}
          >
            <img src={egyptFlag} alt={t("companies.countries.egypt")} />
            <p>{t("companies.countries.egypt")}</p>
          </div>
          <div
            className="location"
            onMouseEnter={() => setHoveredCountry("ksa")}
            onMouseLeave={() => setHoveredCountry(null)}
          >
            <img src={ksaFlag} alt={t("companies.countries.ksa")} />
            <p>{t("companies.countries.ksa")}</p>
          </div>
          <div
            className="location"
            onMouseEnter={() => setHoveredCountry("uae")}
            onMouseLeave={() => setHoveredCountry(null)}
          >
            <img src={uaeFlag} alt={t("companies.countries.uae")} />
            <p>{t("companies.countries.uae")}</p>
          </div>
        </div>
      </div>

      <h2 className="companies-title">{t("companies.our_companies")}</h2>
      <div className="company-grid">
        <a
          href="https://binrashideg.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={company7}
            alt="Company 0"
            className={`company-logo ${
              hoveredCountry === "egypt" ? "zoom" : ""
            }`}
            data-country="egypt"
          />
        </a>
        <Link to="/underconstruction">
          <img
            src={company1}
            alt="Company 1"
            className={`company-logo ${hoveredCountry === "uae" ? "zoom" : ""}`}
            data-country="uae"
          />
        </Link>
        <a
          href="https://arkanmisr.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={company2}
            alt="Company 2"
            className={`company-logo ${
              hoveredCountry === "egypt" ? "zoom" : ""
            }`}
            data-country="egypt"
          />
        </a>
        <a
          href="https://petrovillage.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={company3}
            alt="Company 3"
            className={`company-logo ${
              hoveredCountry === "egypt" ? "zoom" : ""
            }`}
            data-country="egypt"
          />
        </a>
        <a
          href="https://binrashidae.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={company4}
            alt="Company 4"
            className={`company-logo ${hoveredCountry === "uae" ? "zoom" : ""}`}
            data-country="uae"
          />
        </a>
        <a
          href="https://arkanaltafawuq.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={company5}
            alt="Company 5"
            className={`company-logo ${hoveredCountry === "ksa" ? "zoom" : ""}`}
            data-country="ksa"
          />
        </a>
        <Link to="/underconstruction">
          <img
            src={company6}
            alt="Company 6"
            className={`company-logo ${hoveredCountry === "uae" ? "zoom" : ""}`}
            data-country="uae"
          />
        </Link>
      </div>
    </div>
  );
};

export default Companies;
