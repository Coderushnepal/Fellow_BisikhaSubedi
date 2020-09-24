import React from "react";
import { NavLink } from "react-router-dom";
import * as routes from "../routes";

import "./SideNav.css";
import { Component } from "react";

class SideNav extends Component {
  render() {
    return (
      <div className="sidenav">
        <ul className="section-list">
          <li className="section-list-element">
            <NavLink
              style={{ marginRight: "10px" }}
              to={routes.HOME}
              title="home"
              style={{ textDecoration: "none" }}
            >
              Home
            </NavLink>
          </li>
          <li className="section-list-element">
            <NavLink
              to={routes.SKILLS}
              title="skills"
              style={{ textDecoration: "none" }}
            >
              About
            </NavLink>
          </li>
          <li className="section-list-element">
            <NavLink
              to={routes.BLOGS}
              title="blogs"
              style={{ textDecoration: "none" }}
            >
              Blogs
            </NavLink>
          </li>
          <li className="section-list-element">
            <NavLink
              to={routes.GALLERY}
              title="gallery"
              style={{ textDecoration: "none" }}
            >
              Gallery
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default SideNav;
