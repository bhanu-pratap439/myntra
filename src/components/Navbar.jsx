import React from "react";
import "./Navbar.css";


function Navbar () {
  return (
    <nav className="navbar">
      <div className="logo">
        <h1>Myntra</h1>
      </div>
      <ul className="nav-links">
        <li>MEN</li>
        <li>WOMEN</li>
        <li>KIDS</li>
        <li>HOME & LIVING</li>
        <li>BEAUTY</li>
        <li>STUDIO</li>
      </ul>
      <div className="nav-search">
        <input type="text" placeholder="Search for products, brands and more" />
      </div>
    </nav>
  );
};

export default Navbar;
