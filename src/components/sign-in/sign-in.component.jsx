import React from 'react';
import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';

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

    const reinitializeState = { email: '', password: '' };
    this.setState(reinitializeState);
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value }, () => {
      console.log(this.state);
    });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="sign-in">
        <h2> I already have an account </h2>
        <span> Sign in with your email and password </span>

        <form onSubmit={this.handleSubmit}>
          {/*  handleChange, name, type, value, label, required */}
          <FormInput
            handleChange={this.handleChange}
            name="email"
            type="email"
            value={email}
            label="Email"
            required
          />
          <FormInput
            handleChange={this.handleChange}
            name="password"
            type="password"
            value={password}
            label="Password"
            required
          />
          {/* <input
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
          /> */}
          <input type="submit" value="Submit Form" />
        </form>
      </div>
    );
  }
}

export default SignIn;
