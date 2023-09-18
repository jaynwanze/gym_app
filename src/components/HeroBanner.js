import React from "react";
import Hero from "../assets/images/banner.png";
import Section from "../styles/Section";
import Button from "./Button";
const HeroBanner = () => {
  return (
    <Section>
      <div className="overlay">
        <div className="container">
          <div className="design"></div>
          <div className="content">
            <h1 className="title">
              complete <span style={{ color: "#1460e5" }}>daily workout</span>{" "}
              Exercises
            </h1>
            <p style={{ color: "#1460e5" }}>
              Sweat. <span style={{ color: "#fff" }}>Smile.</span> Repeat.
            </p>
            <p className="description">
              Checkout the most effective exercises.
            </p>
            <Button text={`Explore Exercises`} target="exercises" />
          </div>
          <div className="image">
            <img src={Hero}  alt="hero.png" />
          </div>
        </div>
      </div>
    </Section>
  );
};



export default HeroBanner;