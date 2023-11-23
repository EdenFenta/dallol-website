import React from "react";
import "./NavBar.css";
import logo from "../../Img/DCLogo1.png";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <div className="logo-container">
          <Link to="/">
            <img src={logo} alt="Logo" className="logo" />
          </Link>
        </div>
        <Link to="/" className="nav-item">
          Home
        </Link>
        <Link to="/about" className="nav-item">
          About
        </Link>
        <Link to="/catalog" className="nav-item">
          Catalog
        </Link>
        <Link to="/designprocess" className="nav-item">
          Design Process
        </Link>
        <button className="contact-button">
          <Link to="/contactus" className="contact-link">
            Contact Us
          </Link>
        </button>
      </div>
    </nav>
  );
}
export default NavBar;
