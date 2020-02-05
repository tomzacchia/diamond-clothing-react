import React from 'react';
import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle, auth } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
    const reinitializeState = { email: '', password: '' };

    const { email, password } = this.state;

    try {
      // When a user signs-in our onAuthStateChanged subscription will catch it
      await auth.signInWithEmailAndPassword(email, password);

      await this.setState(reinitializeState);
    } catch (error) {
      console.log(error);
    }
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

          <div className="button-container">
            <CustomButton type="submit">Sign In</CustomButton>

            <CustomButton
              type="button"
              handleClick={signInWithGoogle}
              isGoogleSignIn
            >
              Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
