import React, { useState } from 'react';
import './sign-in.styles.scss';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {
  googleSignInStart as googleSignInStartAction,
  emailSignInStart as emailSignInStartAction
} from '../../redux/user/user.actions';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: ''
  });

  const { email, password } = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();

    emailSignInStart(email, password);
  };

  const handleChange = event => {
    const { name, value } = event.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2> I already have an account </h2>
      <span> Sign in with your email and password </span>

      <form onSubmit={handleSubmit}>
        <FormInput
          handleChange={handleChange}
          name="email"
          type="email"
          value={email}
          label="Email"
          required
        />
        <FormInput
          handleChange={handleChange}
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
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStartAction()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStartAction({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);
