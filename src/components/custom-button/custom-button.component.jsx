/* eslint-disable react/button-has-type */
import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({
  type,
  onClick,
  children,
  isGoogleSignIn,
  inverted
}) => {
  let buttonClassName = 'custom-button';

  if (isGoogleSignIn) buttonClassName += ' google-sign-in';

  if (inverted) buttonClassName += ' inverted';

  return (
    <button className={buttonClassName} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default CustomButton;
