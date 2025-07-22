import React, { useEffect, useState } from "react";
import "./NavBar.css";
import logo from "../../assets/AMU-Logo.png";
import menu_icon from "../../assets/menu-icon.png";
import close_icon from "../../assets/close-icon.png";
import { Link } from "react-scroll";

const NavBar = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  return (
    <div>
      <nav className={`container ${sticky ? "dark-nav" : ""}`}>
        <img src={logo} alt="" className="logo" />
        <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
          <li>
            <Link to="hero" smooth={true} offset={0} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="programs" smooth={true} offset={-350} duration={500}>
              Programs
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} offset={-220} duration={500}>
              About us
            </Link>
          </li>
          <li>
            <Link to="campus" smooth={true} offset={-350} duration={500}>
              Campus
            </Link>
          </li>
          <li>
            <Link to="testimonials" smooth={true} offset={-350} duration={500}>
              Testimonials
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              offset={-350}
              duration={500}
              className="btn"
            >
              Contact us
            </Link>
          </li>
        </ul>
        <img
          src={menu_icon}
          alt=""
          className={`menu-icon ${mobileMenu ? "hide" : "show"}`}
          onClick={toggleMenu}
        />
        <img
          src={close_icon}
          alt=""
          className={`close-icon  ${mobileMenu ? "show" : "hide"}`}
          onClick={toggleMenu}
        />
      </nav>
    </div>
  );
};

export default NavBar;
