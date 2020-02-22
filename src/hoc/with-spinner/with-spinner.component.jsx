/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Spinner from '../../components/spinner/spinner.component';

const WithSpinner = WrappedComponent => {
  return ({ isLoading, ...otherProps }) => {
    if (isLoading) {
      return (
        <Spinner />
      );
    }

    return <WrappedComponent {...otherProps} />;
  };
};

export default WithSpinner;
