import React, { Component, Fragment } from "react";
import Particles from "../Particle/index";
import Typewriter from "typewriter-effect";
import { useHistory } from "react-router-dom";

// import CVDownload from "../CVDownload/CVDownload";
import "./Main.css";

const Main = () => {
  const history = useHistory();

  const routeSkills = () => {
    let path = `skills`;
    history.push(path);
  };

  return (
    <Fragment>
      <div className="flex">
        <div className="intro-text">
          Hello, I'm <span className="highlight">Bisikha Subedi</span>
        </div>
        <span className="intro-text">
          {" "}
          I am a
          <Typewriter
            options={{
              strings: [
                "Nepali",
                "Software Developer in making",
                "Computer Engineer, yo!",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </span>
        <div className="main-button clearfix">
          <button className="primary-btn view-work left" onClick={routeSkills}>
            View my work
          </button>
          <button className="primary-btn view-cv">Download CV</button>
        </div>
      </div>
      <Particles />
    </Fragment>
  );
};

export default Main;
