import React from "react";
import "../Hero/Hero.css";
import student from "../../assets/student.png";
import whatsapp from "../../assets/whatsapp.png";
import graph from "../../assets/graph.png";
import google from "../../assets/google.png";
import penn from "../../assets/penn.png";
import stanford from "../../assets/stanford.png";
import microsoft from "../../assets/microsoft1.png";
import airbnb from "../../assets/airbnb.png";
const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero">
        <div className="happy">
          <h5>Our Happy Students</h5>
          <span>150+ online users</span>
          <img src="" alt="" />
        </div>
        <img className="whatsapp" src={whatsapp} alt="" />
        <img className="graph" src={graph} alt="" />
        <div className="left-h">
          <h5>Your e-learning partner</h5>
          <h2>This is the new way to learn online</h2>
          <span>Learn the courses by just watching videos from anywhere.</span>
          <div className="buttons">
            <button>Get Started</button>
            <button>Discover</button>
          </div>
        </div>
        <div className="right-h">
          <img src={student} alt="" />
        </div>
      </div>
      <div>
        We collabrate with <span>100+ leading universities and companies.</span>
      </div>
      <div className="hero2">
        <img src={microsoft} alt="" />
        <img src={stanford} alt="" />
        <img src={google} alt="" />
        <img src={airbnb} alt="" />
        <img src={penn} alt="" />
      </div>
    </div>
  );
};

export default Hero;
