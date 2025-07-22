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
        <h3>About Arba Minch University</h3>
        <h2>Nurturing Tomorrow’s Leaders</h2>
        <p>
          Arba Minch University is one of Ethiopia’s leading public
          universities, known for its strong academic foundation, research
          focus, and service to society. We aim to develop professionals who
          solve problems and lead change in their communities.
        </p>
        <p>
          Our campuses are home to a vibrant and diverse student body,
          state-of-the-art labs, and dedicated faculty. We believe education
          should be practical, inclusive, and future-oriented.
        </p>
        {/* <p>
          repellat et expedita. In unde reprehenderit dicta enim nostrum aut
          voluptatum neque consequuntur ducimus consequatur sequi distinctio
          laborum fugit nihil, quisquam molestiae excepturi accusantium
        </p> */}
      </div>
    </div>
  );
};

export default About;
