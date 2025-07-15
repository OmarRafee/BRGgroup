import React from "react";
import "./ContactUs.css";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next"; // Import translation hook

const ContactUs = () => {
  const { t } = useTranslation(); // Initialize translation hook

  return (
    <motion.div
      className="contact-container"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="contact-info">
        <motion.h1
          className="contact-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {t("contact.title")}
        </motion.h1>
        <motion.p
          className="contact-detail"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          📧 {t("contact.email")}
        </motion.p>
      </div>
      <form className="contact-form">
        <motion.div
          className="form-row"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <input
            type="text"
            placeholder={t("contact.form.full_name")}
            className="form-input"
          />
          <input
            type="email"
            placeholder={t("contact.form.email")}
            className="form-input"
          />
        </motion.div>
        <motion.div
          className="form-row"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <input
            type="text"
            placeholder={t("contact.form.phone")}
            className="form-input"
          />
          <input
            type="text"
            placeholder={t("contact.form.subject")}
            className="form-input"
          />
        </motion.div>
        <motion.textarea
          placeholder={t("contact.form.message")}
          className="form-textarea"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
        ></motion.textarea>
        <motion.button
          type="submit"
          className="form-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          {t("contact.form.submit")}
        </motion.button>
      </form>
    </motion.div>
  );
};

export default ContactUs;
