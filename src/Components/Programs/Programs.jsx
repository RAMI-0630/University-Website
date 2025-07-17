import React from "react";
import "./Programs.css";
import program_1 from "../../assets/undergrad-program.png";
import program_2 from "../../assets/masters-program.png";
import program_3 from "../../assets/phd-program.png";
import program_1_icon from "../../assets/undergrad-icon.png";
import program_2_icon from "../../assets/masters-icon.png";
import program_3_icon from "../../assets/phd-icon.png";

const Programs = () => {
  return (
    <div className="programs">
      <div className="program">
        <img src={program_1} alt="prog1" />
        <div className="caption">
          <img src={program_1_icon} alt="" />
          <p>Undergraduate Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={program_2} alt="prog2" />
        <div className="caption">
          <img src={program_2_icon} alt="" />
          <p>Masters Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={program_3} alt="prog3" />
        <div className="caption">
          <img src={program_3_icon} alt="" />
          <p>PHD Degree</p>
        </div>
      </div>
    </div>
  );
};

export default Programs;
