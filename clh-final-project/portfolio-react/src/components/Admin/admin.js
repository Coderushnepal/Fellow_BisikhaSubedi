import React from "react";
import iziToast from "izitoast";
import "./Admin.css";
import axios from "axios";

class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        email: "",
        password: "",
      },
    };
  }

  fetchData = () => {
    axios({
      method: "POST",
      url: "http://localhost:8848/admin/login",
      data: {
        email: this.state.formData.email,
        password: this.state.formData.password,
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
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { email, password } = this.state.formData;
    console.log(email, password);
    if (!email || !password) {
      let fieldName;

      if (!email) {
        fieldName = "Email";
      } else {
        fieldName = "password";
      }

      iziToast.show({
        title: "Sorry, this form could not be submitted",
        message: `Can you please fill up the ${fieldName} field`,
      });
    }
  };

  render() {
    // console.log(this.state.formData);
    const { email, password } = this.state.formData;
    return (
      <form onSubmit={this.handleSubmit} className="login-form">
        <span className="login-form-title"> Admin Login </span>
        <span className="txt"> Email </span>
        <div className="wrap-input">
          <input
            onChange={this.handleChange}
            className="input-value"
            type="email"
            id="email"
            name="email"
            value={email}
            required
          />
        </div>
        <span className="txt"> Password </span>
        <div className="wrap-input">
          <span className="btn-show-pass">
            <i
              id="eyeIcon"
              className="fa fa-eye"
              //  onClick="myFunction()"
            ></i>
          </span>
          <input
            onChange={this.handleChange}
            className="input-value"
            type="password"
            name="password"
            id="myInput"
            value={password}
          />
        </div>
        <div className="container-login-form-btn">
          <button
            type="submit"
            className="login-form-btn"
            onClick={this.fetchData}
          >
            LOG IN
          </button>
        </div>
      </form>
    );
  }
}
export default Admin;
