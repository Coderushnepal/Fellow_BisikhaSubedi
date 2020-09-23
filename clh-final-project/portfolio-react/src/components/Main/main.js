import React, { Component, Fragment } from "react";
import Particles from "react-particles-js";
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
      <Particles
        className="particles-js"
        style={{ position: "absolute", backgroundColor: "#252934" }}
        height="100%"
        width="100%"
        params={{
          particles: {
            color: {
              value: "#ffffff",
            },
            number: {
              value: 160,
              density: {
                enable: false,
              },
            },
            size: {
              value: 3,
              random: true,
              anim: {
                speed: 4,
                size_min: 0.3,
              },
            },
            line_linked: {
              enable: false,
            },
            move: {
              random: true,
              speed: 1,
              direction: "top",
              out_mode: "out",
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "bubble",
              },
              onclick: {
                enable: true,
                mode: "repulse",
              },
            },
            modes: {
              bubble: {
                distance: 250,
                duration: 2,
                size: 0,
                opacity: 0,
              },
              repulse: {
                distance: 400,
                duration: 4,
              },
            },
          },
        }}
      />
    </Fragment>
  );
};

export default Main;
