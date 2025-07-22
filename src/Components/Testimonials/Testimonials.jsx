import React, { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

const Testimonials = () => {
  const slider = useRef(null);
  let tx = 0;
  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  return (
    <div className="testimonials">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <img
        src={back_icon}
        alt=""
        className="back-btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <div className="img-frame">
                  <img src={user_1} alt="" />
                </div>
                <div>
                  <h3>Meron Asefa</h3>
                  <span>AMU, Ethiopia</span>
                </div>
              </div>
              <p>
                "Studying at Arba Minch University gave me both knowledge and
                confidence. The instructors were helpful and the learning
                environment was great."
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <div className="img-frame">
                  <img src={user_2} alt="" />
                </div>
                <div>
                  <h3>Sara Mekonnen</h3>
                  <span>AMU, Ethiopia</span>
                </div>
              </div>
              <p>
                "Arba Minch University helped me grow both academically and
                personally. The support from my professors made a big difference
                in my journey."
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <div className="img-frame">
                  <img src={user_3} alt="" />
                </div>
                <div>
                  <h3>Nahom Tesfaye</h3>
                  <span>AMU, Ethiopia</span>
                </div>
              </div>
              <p>
                "The hands-on learning approach at AMU prepared me well for
                real-world challenges. I especially enjoyed the projects and
                research opportunities."
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <div className="img-frame">
                  <img src={user_4} alt="" />
                </div>
                <div>
                  <h3>William Jackson</h3>
                  <span>AMU, Ethiopia</span>
                </div>
              </div>
              <p>
                "The campus is peaceful and well-organized. I felt safe,
                focused, and motivated every day. AMU gave me the tools to
                succeed."
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
