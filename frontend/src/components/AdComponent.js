import React from "react";
import "./AdComponent.css"; // Add styles for the ad component

const AdComponent = ({ ad }) => {
  return (
    <div className="ad-container">
      <span className="ad-label">Sponsored</span>
      <img src={ad.image} alt={ad.headline} className="ad-image" />
      <h3 className="ad-headline">{ad.headline}</h3>
      <p className="ad-description">{ad.description}</p>
      <a href={ad.link} className="ad-cta" target="_blank" rel="noopener noreferrer">
        {ad.cta}
      </a>
    </div>
  );
};

export default AdComponent;