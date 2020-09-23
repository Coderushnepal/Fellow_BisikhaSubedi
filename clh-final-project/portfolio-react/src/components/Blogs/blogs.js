import React from "react";
import axios from "axios";
import SideNav from "../../constants/SideNav/SideNav";

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
    console.log(this.state.blogs);
    return (
      <div className="blogs-page-container">
        <div className="sidenav-container">
          <SideNav />
        </div>
        <div className="blogs-container">
          {this.state.blogs.map((blog) => (
            <li>
              {blog.title}
              {blog.description}
            </li>
          ))}
        </div>
      </div>
    );
  }
}

export default Blogs;
