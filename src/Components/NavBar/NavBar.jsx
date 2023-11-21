import React from "react";
import "./NavBar.css";
import logo from "D:/Dallol Cabinets/dallol-website/src/Img/DCLogo2.png"; // replace with the actual path to your logo

function NavBar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <div className="nav-links">
        <a href="/" className="nav-item">
          Home
        </a>
        <a href="/about" className="nav-item">
          About
        </a>
        <a href="/catalog" className="nav-item">
          Catalog
        </a>
        <a href="/designprocess" className="nav-item">
          Design Process
        </a>
        <button className="contact-button">Contact Us</button>
      </div>
    </nav>
  );
}

export default NavBar;
