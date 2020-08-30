import React from "react";
import { NavLink } from "react-router-dom";
import * as routes from "../routes";

import "./SideNav.css";
import { Component } from "react";

class SideNav extends Component {
  render() {
    return (
      <div className="sidenav">
        <img
          src="https://winstemplymouth.org/wp-content/uploads/2018/02/Female-Avatar-5-e1518176677210-300x300.png"
          className="avatar"
          alt="avatar"
        ></img>
        <div className="main-name">Bisikha Subedi</div>
        <p className="subtitle">Learning to CODE!!</p>

        <div className="section-list">
          <p className="section-list-element">
            <NavLink
              exact
              to={routes.HOME}
              title="home"
              style={{ textDecoration: "none" }}
            >
              Home
            </NavLink>
          </p>
          <p className="section-list-element">
            <NavLink
              to={routes.BLOGS}
              title="blogs"
              style={{ textDecoration: "none" }}
            >
              Blogs
            </NavLink>
          </p>
          <p className="section-list-element">
            <NavLink
              to={routes.GALLERY}
              title="gallery"
              style={{ textDecoration: "none" }}
            >
              Gallery
            </NavLink>
          </p>
          <p className="section-list-element">
            <NavLink
              to={routes.CONTACT}
              title="contact"
              style={{ textDecoration: "none" }}
            >
              Contact
            </NavLink>
          </p>
        </div>
      </div>
    );
  }
}

export default SideNav;
