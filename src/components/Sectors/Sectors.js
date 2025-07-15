import React, { useState } from "react";
import "./Sectors.css";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

// English images
import sector2 from "../../assets/sector2.webp";
import sector5 from "../../assets/sector5.webp";
import sector6 from "../../assets/sector6.webp";
import sector11 from "../../assets/sector11.webp";
import pop2 from "../../assets/pop2.webp";
import pop5 from "../../assets/pop5.webp";
import pop6 from "../../assets/pop6.webp";
import pop11 from "../../assets/pop11.webp";

// Arabic images
import sector2_ar from "../../assets/sector2_ar.jpg";
import sector5_ar from "../../assets/sector5_ar.jpg";
import sector6_ar from "../../assets/sector6_ar.jpg";
import sector11_ar from "../../assets/sector11_ar.jpg";
import pop2_ar from "../../assets/pop2_ar.jpg";
import pop5_ar from "../../assets/pop5_ar.jpg";
import pop6_ar from "../../assets/pop6_ar.jpg";
import pop11_ar from "../../assets/pop11_ar.jpg";

const Sectors = () => {
  const { t, i18n } = useTranslation(); // translation + language
  const isArabic = i18n.language === "ar";

  const [selectedIndex, setSelectedIndex] = useState(null);

  const sectors = [
    {
      thumbnail: isArabic ? sector2_ar : sector2,
      popup: isArabic ? pop2_ar : pop2,
      title: t("sectors.items.0.title"),
      description: t("sectors.items.0.description"),
    },
    {
      thumbnail: isArabic ? sector5_ar : sector5,
      popup: isArabic ? pop5_ar : pop5,
      title: t("sectors.items.1.title"),
      description: t("sectors.items.1.description"),
    },
    {
      thumbnail: isArabic ? sector6_ar : sector6,
      popup: isArabic ? pop6_ar : pop6,
      title: t("sectors.items.2.title"),
      description: t("sectors.items.2.description"),
    },
    {
      thumbnail: isArabic ? sector11_ar : sector11,
      popup: isArabic ? pop11_ar : pop11,
      title: t("sectors.items.3.title"),
      description: t("sectors.items.3.description"),
    },
  ];

  return (
    <div
      className={`sectors-container ${selectedIndex !== null ? "blurred" : ""}`}
      onClick={() => setSelectedIndex(null)}
    >
      <div className="title-container">
        <motion.h1
          className="sectors-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {t("sectors.title")}
        </motion.h1>
      </div>
      <div className="sectors-grid">
        {sectors.map((sector, index) => (
          <motion.div
            key={index}
            className={`sector-wrapper ${
              selectedIndex === index ? "active" : ""
            }`}
            onClick={(e) => {
              e.stopPropagation();
              setSelectedIndex(index);
            }}
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <img
              src={sector.thumbnail}
              alt={`Sector ${index + 1}`}
              className="sector-image"
            />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="popup-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={() => setSelectedIndex(null)}
          >
            <motion.div
              className="popup"
              initial={{ scale: 0.8, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.8, y: 50, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={sectors[selectedIndex].popup}
                alt="Popup"
                className="popup-image"
              />
              <h2 className="popup-title">{sectors[selectedIndex].title}</h2>
              <p className="popup-description">
                {sectors[selectedIndex].description}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Sectors;
