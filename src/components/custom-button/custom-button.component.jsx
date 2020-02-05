/* eslint-disable react/button-has-type */
import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({ type, handleClick, children, isGoogleSignIn }) => {
  let buttonClassName = 'custom-button';

  if (isGoogleSignIn) buttonClassName = 'custom-button google-sign-in';

  return (
    <button className={buttonClassName} type={type} onClick={handleClick}>
      {children}
    </button>
  );
};

export default CustomButton;
