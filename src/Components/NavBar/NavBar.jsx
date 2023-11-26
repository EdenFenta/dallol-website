import React from "react";
import "./NavBar.css";
import logo from "../../Img/DCLogo1.png";
import { Link } from "react-scroll";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <div className="logo-container">
          <Link to="/">
            <img src={logo} alt="Logo" className="logo" />
          </Link>
        </div>
        <Link
          to="home"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="nav-item"
        >
          Home
        </Link>
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="nav-item"
        >
          About
        </Link>
        <Link
          to="catalog"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="nav-item"
        >
          Catalog
        </Link>
        <Link
          to="designprocess"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="nav-item"
        >
          Design Process
        </Link>
        <button className="contact-button">
          <Link
            to="/contactus"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="contact-link"
          >
            Contact Us
          </Link>
        </button>
      </div>
    </nav>
  );
}
export default NavBar;
