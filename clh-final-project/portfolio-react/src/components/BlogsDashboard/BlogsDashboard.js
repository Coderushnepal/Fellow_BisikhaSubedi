import React, { Component } from "react";
// import "../main/blog/create_blog/CreateBlog.css";
import axios from "axios";
class BlogsDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        title: "",
        description: "",
      },
    };
  }
  fetchData = () => {
    axios({
      method: "POST",
      url: "http://localhost:8848/blogs",
      data: {
        title: this.state.formData.title,
        description: this.state.formData.description,
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  handleChange = (event) => {
    this.setState({
      formData: {
        ...this.state.formData,
        [event.target.name]: event.target.value,
      },
    });
    console.log(this.state.formData);
  };
  handleSubmit = (event) => {
    event.preventDefault();
  };
  render() {
    const { title, description } = this.state.formData;
    return (
      <div className="create">
        <form onSubmit={this.handleSubmit}>
          <label>Title: </label>
          <br></br>
          <input
            onChange={this.handleChange}
            type="text"
            name="title"
            value={title}
            placeholder="Enter blog title"
            required
          />
          <br></br>
          <label>description :</label>
          <br></br>
          <textarea
            cols="40"
            rows="10"
            onChange={this.handleChange}
            name="description"
            value={description}
            placeholder="Enter blog text"
            required
          ></textarea>
          <br />
          <button onClick={this.fetchData} className="button" type="submit">
            submit
          </button>
          <br></br>
        </form>
      </div>
    );
  }
}
export default BlogsDashboard;
