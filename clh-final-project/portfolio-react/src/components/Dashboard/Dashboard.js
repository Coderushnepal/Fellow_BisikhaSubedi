import React, { Fragment } from "react";

import CreatePost from "../GalleryDashboard/index";
import BlogsDashboard from "../BlogsDashboard/index";

const Main = () => {
  return (
    <Fragment>
      <div className="dashboard-container">
        <div className="blogs-dashboard">
          <h2>Thoughts, what a wonderful place to live in!</h2>
          <p>Update Blogs</p>
          <BlogsDashboard></BlogsDashboard>
        </div>
        <div className="gallery-dashboard">
          <h2>Pictures let us live in that moment from the past</h2>
          <p>Update Your Gallery</p>
          <CreatePost></CreatePost>
        </div>
      </div>
    </Fragment>
  );
};

export default Main;
