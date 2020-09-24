import React from "react";
import axios from "axios";
import SideNav from "../../constants/SideNav/SideNav";
import "./Blogs.css";

class Blogs extends React.Component {
  state = {
    blogs: [],
  };

  componentDidMount() {
    axios.get(`http://localhost:8848/blogs`).then((res) => {
      const blogs = res.data.data;
      console.log(blogs);
      this.setState({ blogs });
    });
  }

  render() {
    // console.log(this.state.blogs);
    return (
      <div className="blogs-page-container">
        <div className="sidenav-container">
          <SideNav />
        </div>
        <div className="blogs-container">
          {this.state.blogs.map((blog) => (
            <div key={`blogs-${blog.id}`}>
              <p className="blog-title">{blog.title}</p>
              <p className="blog-description">{blog.description}</p>
              {/* <p className="blog-excerpt">{blog.excerpt}</p> */}
              <p className="blog-excerpt">{blog.published_on}</p>
              <hr
                width="50%"
                size="8"
                align="center"
                style={{ marginTop: "50px" }}
              ></hr>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Blogs;
