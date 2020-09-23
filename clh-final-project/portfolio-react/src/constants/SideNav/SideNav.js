import React from "react";
import { NavLink } from "react-router-dom";
import * as routes from "../routes";

import "./SideNav.css";
import { Component } from "react";

class SideNav extends Component {
  render() {
    return (
      <div className="sidenav">
        <div className="section-list">
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
        </div>
      </div>
    );
  }
}

export default SideNav;
