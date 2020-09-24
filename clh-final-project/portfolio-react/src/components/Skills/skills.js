import React from "react";
import SideNav from "../../constants/SideNav/SideNav";
import "./Skills.css";

const Skills = () => (
  <div className="about-page">
    <div className="sidenav-container">
      <SideNav />
    </div>
    <div className="about-container about-clearfix">
      <div className="about-avatar about-left">
        <img src="https://pbs.twimg.com/profile_images/720212972061065216/kR-5N9pw.jpg"></img>
      </div>
      <div className="about-avatar about-right">
        <p>I am familier with:</p>
        <div className="progress-bar clearfix">
          <label for="file" className="progress-left">
            html
          </label>
          <progress id="file" max="100" value="50" className="progress-right">
            50%
          </progress>
          <br></br>
          <label for="file" className="progress-left">
            CSS
          </label>
          <progress id="file" max="100" value="30" className="progress-right">
            30%
          </progress>
          <br></br>
          <label for="file" className="progress-left">
            JavaScript
          </label>
          <progress id="file" max="100" value="45" className="progress-right">
            45%
          </progress>
          <br></br>
          <label for="file" className="progress-left">
            React
          </label>
          <progress id="file" max="100" value="25" className="progress-right">
            25%
          </progress>
          <br></br>
          <label for="file" className="progress-left">
            Node
          </label>
          <progress id="file" max="100" value="25" className="progress-right">
            25%
          </progress>
          <br></br>
        </div>
        <div className="media">
          <a href="https://github.com/Coderushnepal/BisikhaSubedi">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://twitter.com/Bisikha1">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com/bisikha/">
            <i class="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
    <div className="skills-container"></div>
  </div>
);

export default Skills;
