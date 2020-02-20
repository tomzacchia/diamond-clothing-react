import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeButton = ({ price }) => {
  // stripe wants to price in cents
  const priceInCents = price * 100;
  const publishableKey = 'pk_test_IgHcCCXI9FJiB2cICt37UChx';

  const URL = process.env.REACT_APP_API_URL;
  // const URL = 'https://diamond-clothin-api.herokuapp.com';

  const onToken = token => {
    axios({
      url: `${URL}/payment`,
      method: 'post',
      data: {
        amount: priceInCents,
        token
      }
    })
      .then(res => {
        console.log(res);
        alert('Payment was successfull');
      })
      .catch(error => {
        console.log(error);
        alert('There was an issue with your payment');
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Fine Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceInCents}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
