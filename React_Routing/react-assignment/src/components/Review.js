import React from "react";
// import SideNav from "../../constants/SideNav/SideNav";

import iziToast from "izitoast";
import Loader from "./Loader";
// import Loader from "../Loader";

class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: {
        name: "",
        email: "",
        address: "",
        comment: "",
      },
      isLoading: false,
    };
  }

  handleChange = (event) => {
    this.setState({
      formData: {
        ...this.state.formData,
        [event.target.name]: event.target.value,
      },
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { name, email, address, comment } = this.state.formData;

    if (!name || !email || !address || !comment) {
      let fieldName;
      if (!name) {
        fieldName = "Name";
      } else if (!email) {
        fieldName = "Email";
      } else if (!address) {
        fieldName = "Address";
      } else {
        fieldName = "comment";
      }

      iziToast.show({
        title: "Sorry, this form could not be submitted",
        message: `Can you please fill up the ${fieldName} field`,
      });
    } else {
      this.setState({
        isLoading: true,
      });

      setTimeout(() => {
        this.setState({
          isLoading: false,
        });
        iziToast.show({
          title: "Submitted",
          message: `I will get back to you soon`,
        });
        this.props.history.push("/home");
      }, 4000);
    }
  };

  render() {
    // console.log(this.state.formData);
    const { name, email, address, comment } = this.state.formData;
    return (
      <div className="form-card">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Full Name</label>
          <br />
          <input
            onChange={this.handleChange}
            type="text"
            id="name"
            name="name"
            value={name}
          />
          <br />
          <label htmlFor="email">Email</label>
          <br />
          <input
            onChange={this.handleChange}
            type="email"
            id="email"
            name="email"
            value={email}
          />
          <br />
          <label htmlFor="address">Address</label>
          <br />
          <input
            onChange={this.handleChange}
            type="text"
            id="address"
            name="address"
            value={address}
          />
          <br />
          <label htmlFor="number">Comment</label>
          <br />
          <textarea
            rows="15"
            cols="50"
            onChange={this.handleChange}
            type="text"
            id="comment"
            name="comment"
            value={comment}
          />
          <br />
          <button type="submit" className="btn-primary">
            Submit{this.state.isLoading && <Loader />}
          </button>
        </form>
      </div>
    );
  }
}

export default About;
