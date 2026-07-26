import "./loader.scss";

export function Loader() {
  return (
    <div className="portfolio-loader">
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
