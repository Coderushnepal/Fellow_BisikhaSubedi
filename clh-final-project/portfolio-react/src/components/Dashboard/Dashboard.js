import React, { Fragment } from "react";
import {withRouter} from 'react-router-dom';
import CreatePost from "../GalleryDashboard/index";
import BlogsDashboard from "../BlogsDashboard/index";
import "./Dashboard.css";

const Main = (props) => {
  const handleLogOut = () => {
    localStorage.removeItem("Token");
    props.history.replace("/");
  };

  return (
    <Fragment>
      <button className="button" onClick={handleLogOut}>
        logout
      </button>
      <div className="dashboard-container clearfix">
        <div className="blogs-dashboard">
          <h2 className="text">Thoughts, what a wonderful place to live in!</h2>
          <p className="text">Update Blogs</p>
          <BlogsDashboard></BlogsDashboard>
        </div>
        <div className="gallery-dashboard">
          <h2 className="text">
            Pictures let us live in that moment from the past
          </h2>
          <p className="text">Update Your Gallery</p>
          <CreatePost></CreatePost>
        </div>
      </div>
    </Fragment>
  );
};

export default withRouter(Main);
