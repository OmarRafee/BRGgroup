import React, { useState } from "react";
import "./About.css";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next"; // Import translation hook

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const expandVariants = {
  hidden: { opacity: 0, height: 0, y: 20 },
  visible: {
    opacity: 1,
    height: "auto",
    y: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
  exit: {
    opacity: 0,
    height: 0,
    y: -20,
    transition: { duration: 0.4, ease: "easeInOut" },
  },
};

const About = () => {
  const { t } = useTranslation(); // Initialize translation hook
  const [isReadMoreMission, setIsReadMoreMission] = useState(false);
  const [isReadMoreVision, setIsReadMoreVision] = useState(false);

  const toggleReadMoreMission = () => {
    setIsReadMoreMission(!isReadMoreMission);
  };

  const toggleReadMoreVision = () => {
    setIsReadMoreVision(!isReadMoreVision);
  };

  return (
    <motion.div
      className="about-container"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.h1 className="about-title" variants={fadeInUp}>
        {t("about.title")}
      </motion.h1>
      {[1, 2, 3, 4, 5].map((index) => (
        <motion.p className="about-text" variants={fadeInUp} key={index}>
          {t(`about.text${index}`)}
        </motion.p>
      ))}
      <motion.div className="about-sections" variants={fadeInUp}>
        <motion.div className="about-section" variants={fadeInUp}>
          <h3 className="section-title">{t("about.mission.title")}</h3>
          <p className="section-text">{t("about.mission.text1")}</p>
          <AnimatePresence>
            {isReadMoreMission && (
              <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={expandVariants}
                className="expanded-content"
              >
                {[2, 3, 4].map((index) => (
                  <p className="section-text" key={index}>
                    {t(`about.mission.text${index}`)}
                  </p>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
          <p className="section-link" onClick={toggleReadMoreMission}>
            {isReadMoreMission ? t("about.read_less") : t("about.read_more")}
          </p>
        </motion.div>
        <motion.div className="about-section" variants={fadeInUp}>
          <h3 className="section-title">{t("about.vision.title")}</h3>
          <p className="section-text">{t("about.vision.text1")}</p>
          <AnimatePresence>
            {isReadMoreVision && (
              <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={expandVariants}
                className="expanded-content"
              >
                {[2, 3, 4].map((index) => (
                  <p className="section-text" key={index}>
                    {t(`about.vision.text${index}`)}
                  </p>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
          <p
            className="section-link readmoremargin"
            onClick={toggleReadMoreVision}
          >
            {isReadMoreVision ? t("about.read_less") : t("about.read_more")}
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
