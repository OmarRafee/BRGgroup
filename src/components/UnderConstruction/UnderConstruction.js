import React from "react";
import "./UnderConstruction.css";

const UnderConstruction = () => {
  return (
    <div className="construction-container">
      <div className="construction-background"></div>
      <div className="crane">
        <div className="crane-arm">
          <div className="crane-hook"></div>
        </div>
      </div>
      <h1 className="construction-text">Building in Progress</h1>
      <div className="loading-bar">
        <div className="loading-progress"></div>
      </div>
      <p className="team-message">
        Our engineers are assembling something epic. Hang tight!
      </p>
    </div>
  );
};

export default UnderConstruction;