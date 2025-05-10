import React from 'react';
import './Hero.css'; // Assuming you have a CSS file for styles

function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="hero-bg-overlay"></div>
        <video autoPlay muted loop>
          <source src="/api/placeholder/1920/1080" type="video/mp4" />
        </video>
      </div>
      <div className="hero-content container">
        <h1 className="hero-title heading-1">
          Modern Digital Solutions for Forward-Thinking Businesses
        </h1>
        <p className="hero-subtitle subtitle">
          We craft exceptional digital experiences that elevate your brand, engage
          your audience, and drive sustainable growth.
        </p>
        <a href="#services" className="hero-cta btn btn-secondary">
          Explore Our Services
        </a>
      </div>
    </section>
  );
}

export default Hero;