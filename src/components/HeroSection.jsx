import React from "react";
import heroImage from "../assets/hero-image.jpg";
import "./HeroSection.css";

export default function HeroSection() {
  return (
    <section className="hero-section">
      <img
        src={heroImage}
        alt="saurabh"
        className="hero-image"
      />
      <div className="hero-text">
        <h1>
          I'm Saurabh Yadav.<br /> An Intermidiate Web Developer
          <br /> <span>From India</span>
        </h1>
        <p>DEVELOPER BY CHOICE NOT BY CHANCE</p>
        <p>
          If you are look for a Web Developer who is Time punctual and passinated about work then
          I’m your guy.
        </p>
      </div>
    </section>
  );
}
