import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon (2).png";

const About = ({ setPlay }) => {
  const openPlayer = () => {
    setPlay(true);
  };

  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img
          src={play_icon}
          alt=""
          className="play-icon"
          onClick={openPlayer}
        />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tommorow's Leaders Today</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt cum
          repellat et expedita. In unde reprehenderit dicta enim nostrum aut
          voluptatum neque consequuntur ducimus consequatur sequi distinctio
          laborum fugit nihil, quisquam molestiae excepturi accusantium
        </p>
        <p>
          repellat et expedita. In unde reprehenderit dicta enim nostrum aut
          voluptatum neque consequuntur ducimus consequatur sequi distinctio
          laborum fugit nihil, quisquam molestiae excepturi accusantium
        </p>
        <p>
          repellat et expedita. In unde reprehenderit dicta enim nostrum aut
          voluptatum neque consequuntur ducimus consequatur sequi distinctio
          laborum fugit nihil, quisquam molestiae excepturi accusantium
        </p>
      </div>
    </div>
  );
};

export default About;
