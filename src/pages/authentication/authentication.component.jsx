import React from 'react';
import './authentication.styles.scss';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const Authentication = () => {
  return (
    <div className="authentication-form">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Authentication;
