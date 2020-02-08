/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import './checkout.styles.scss';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  selectCartItems,
  selectCartTotalCost
} from '../../redux/cart/cart.selectors';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

const Checkout = ({ cartItems, cartTotalCost }) => {
  const checkoutItemsMarkup = createCheckoutItemsMarkup(cartItems);

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {checkoutItemsMarkup}

      <div className="total">
        <span>Total:${cartTotalCost}</span>
      </div>
    </div>
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
