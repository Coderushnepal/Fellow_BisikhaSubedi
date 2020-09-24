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
        const token = res.data.data.token;
        localStorage.setItem("Token", token);
        this.props.history.push("/dashboard");
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
      <div className="admin-container">
        <div className="login-text"> Admin Login </div>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <div className="create">
            <form onSubmit={this.handleSubmit} className="admin-form">
              <label className="label"> Email: </label>
              <br></br>
              <input
                onChange={this.handleChange}
                className="input-value"
                type="email"
                id="email"
                name="email"
                value={email}
                required
              />
              <br></br>
              <label className="label"> Password: </label>
              <br></br>
              <input
                onChange={this.handleChange}
                className="input-value"
                type="password"
                name="password"
                id="myInput"
                value={password}
              />
              <br></br>
              <button className="login-button" onClick={this.fetchData}>
                LOG IN
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Admin;
