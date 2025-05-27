import React from "react";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import "./App.css";

export default function App() {
  return (
    <div className="app-container">
      <Navbar />
      <HeroSection />
    </div>
  );
}