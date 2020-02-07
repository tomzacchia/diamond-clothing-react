/* eslint-disable react/button-has-type */
import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({
  type,
  handleClick,
  children,
  isGoogleSignIn,
  inverted
}) => {
  let buttonClassName = 'custom-button';

  if (isGoogleSignIn) buttonClassName += ' google-sign-in';

  if (inverted) buttonClassName += ' inverted';

  return (
    <button className={buttonClassName} type={type} onClick={handleClick}>
      {children}
    </button>
  );
};

export default CustomButton;
