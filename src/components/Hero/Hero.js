import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next"; // Import translation hook
import "./Hero.css";
import jolee from "../../assets/jolee.mp4";

const Hero = () => {
  const videoRef = useRef(null);
  const { t } = useTranslation(); // Get translation function

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; // Slowed playback rate
    }
  }, []);

  return (
    <div className="hero">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline // Ensures autoplay on mobile without user gesture
        className="hero-video"
      >
        <source src={jolee} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h1 className="hero-text">{t("hero.heroText")}</h1>
    </div>
  );
};

export default Hero;
