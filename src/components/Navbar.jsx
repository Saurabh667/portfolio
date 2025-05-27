import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">Saurabh.Y</h1>
      <ul className="nav-links">
        <li>Experience</li>
        <li>Work</li>
        <li>Resume</li>
        <li className="contact-btn">Contact</li>
      </ul>
    </nav>
  );
}