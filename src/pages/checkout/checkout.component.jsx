/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import * as S from './checkout.styles';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  selectCartItems,
  selectCartTotalCost
} from '../../redux/cart/cart.selectors';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeButton from '../../components/stripe-button/stripe-button.component';

const Checkout = ({ cartItems, cartTotalCost }) => {
  const checkoutItemsMarkup = createCheckoutItemsMarkup(cartItems);

  return (
    <S.CheckoutPageContainer>
      <S.CheckoutHeaderContainer>
        <S.HeaderBlockContainer>
          <span>Product</span>
        </S.HeaderBlockContainer>
        <S.HeaderBlockContainer>
          <span>Description</span>
        </S.HeaderBlockContainer>
        <S.HeaderBlockContainer>
          <span>Quantity</span>
        </S.HeaderBlockContainer>
        <S.HeaderBlockContainer>
          <span>Price</span>
        </S.HeaderBlockContainer>
        <S.HeaderBlockContainer>
          <span>Remove</span>
        </S.HeaderBlockContainer>
      </S.CheckoutHeaderContainer>

      {checkoutItemsMarkup}

      <S.TotalContainer>Total:${cartTotalCost}</S.TotalContainer>

      <S.WarningContainer>
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 06/20 - CVV: 123
      </S.WarningContainer>

      <StripeButton price={cartTotalCost} />
    </S.CheckoutPageContainer>
  );
};

const createCheckoutItemsMarkup = cartItems => {
  if (cartItems.length === 0) return null;

  return cartItems.map(cartItem => (
    <CheckoutItem cartItem={cartItem} key={cartItem.id} />
  ));
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotalCost: selectCartTotalCost
});

export default connect(mapStateToProps)(Checkout);
