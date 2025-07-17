import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/arrow2.png";

function Hero() {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
          laudantium.
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, esse
          numquam? Aut reiciendis sunt, neque maiores minus tempora voluptas
          labore, magnam dolores soluta necessitatibus maxime alias asperiores
          qui accusantium ad. Commodi nostrum tenetur vitae est officia optio
          debitis, nesciunt reprehenderit.
        </p>
        <button className="btn">
          Eplore more <img src={dark_arrow} alt="" />
        </button>
      </div>
    </div>
  );
}
export default Hero;
