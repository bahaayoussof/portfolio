import React from "react";
import "./loader.scss";

export function Loader(props) {
  return (
    <div className="portfolio-loader" {...props}>
      <div className="loader-container">
        {/* Main spinning circle */}
        <div className="spinner-ring">
          <div className="spinner-ring-inner"></div>
        </div>

        {/* Loading text with typing animation */}
        <div className="loading-text">
          <span className="text-typing">Loading</span>
        </div>
      </div>
    </div>
  );
}
