import React from "react";
import iziToast from "izitoast";

class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        email: "",
        password: "",
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

    const { email, password } = this.state.formData;

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
          message: `Redirecting you to the dashboard`,
        });
        this.props.history.push("/dashboard");
      }, 4000);
    }
  };

  render() {
    // console.log(this.state.formData);
    const { email, password } = this.state.formData;
    return (
      <div className="form-card">
        <form onSubmit={this.handleSubmit}>
          <button>Login</button>
          <button>Sign Up</button>
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
          <label htmlFor="password">Password</label>
          <br />
          <input
            onChange={this.handleChange}
            type="password"
            id="password"
            name="password"
            value={password}
          />
          <br />
          <button type="submit" className="btn-primary">
            Submit{this.state.isLoading}
          </button>
        </form>
      </div>
    );
  }
}
export default Admin;
