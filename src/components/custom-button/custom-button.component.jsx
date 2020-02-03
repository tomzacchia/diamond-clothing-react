/* eslint-disable react/button-has-type */
import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({ type, handleClick, children }) => {
  return (
    <button className="custom-button" type={type} onClick={handleClick}>
      {children}
    </button>
  );
};

export default CustomButton;
