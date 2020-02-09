/* eslint-disable react/button-has-type */
import React from 'react';

import CustomButtonContainer from './custom-button.styles';

const CustomButton = ({
  type,
  onClick,
  children,
  isGoogleSignIn,
  inverted
}) => {
  return (
    <CustomButtonContainer
      type={type}
      onClick={onClick}
      isGoogleSignIn={isGoogleSignIn}
      inverted={inverted}
    >
      {children}
    </CustomButtonContainer>
  );
};

export default CustomButton;
