import React from 'react';

class SignIn extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = event => {
    event.preventDefault();

    const reinitializeState = { email: '', pasword: '' };
    this.setState(reinitializeState);
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="sign-in">
        <h2> I already have an account </h2>
        <span> Sign in with your email and password </span>

        <form onSubmit={this.handleSubmit}>
          <input
            type="email"
            value={email}
            name="email"
            required
            onChange={this.handleChange}
          />
          <input
            type="password"
            value={password}
            name="password"
            required
            onChange={this.handleChange}
          />
          <input type="submit" value="Submit Form" />
        </form>
      </div>
    );
  }
}

export default SignIn;
