import React from "react";
import "./Hero.css";
import hand_icon from "./../assets/iconHand.gif";
import HomeImage from "./../assets/pic12.png";
import logo from "./../assets/rightLogo.gif";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>
          Gandi <span>AfGHaNi</span>
        </h2>
        <div className="hero-hand-icon">
          <p>new</p>
          <img src={hand_icon} alt="" />
        </div>
        <p>Collection</p>
        <p>for Everyone</p>

        <div className="hero-latest-btn">
          <div>You want to see?</div>
          <img src={logo} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={HomeImage} alt="" />
      </div>
    </div>
  );
};

export default Hero;
