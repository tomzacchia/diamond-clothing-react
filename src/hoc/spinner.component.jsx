/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import * as S from './spinner.styles';

const Spinner = WrappedComponent => {
  return ({ isLoading, ...otherProps }) => {
    if (isLoading) {
      return (
        <S.SpinnerOverlay>
          <S.SpinnerContainer />
        </S.SpinnerOverlay>
      );
    }

    return <WrappedComponent {...otherProps} />;
  };
};

export default Spinner;
