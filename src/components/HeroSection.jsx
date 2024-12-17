import React from "react";
import "./HeroSection.css";
import BannerImage from "../assets/image.png";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <img src={BannerImage} alt="Western Wear Banner" className="hero-image" />
      <div className="hero-text">
        <h2>WESTERN WEAR</h2>
        <p>Min. 30% Off</p>
        <button className="explore-btn">+ Explore</button>
      </div>
    </div>
  );
};

export default HeroSection;
