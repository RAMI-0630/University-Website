import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/arrow2.png";

function Hero() {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>Welcome to Arba Minch University</h1>
        <p>
          A place where learning meets purpose. We are committed to academic
          excellence and community development.
        </p>
        <button className="btn">
          Explore More <img src={dark_arrow} alt="" />
        </button>
      </div>
    </div>
  );
}
export default Hero;
