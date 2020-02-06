/* eslint-disable no-shadow */
import React from 'react';
import './cart-icon.styles.scss';
import { connect } from 'react-redux';

import { ReactComponent as ShopIcon } from '../../assets/shopping-bag.svg';
import { toggleCartDropdown } from '../../redux/cart/cart.actions';

const CartIcon = ({ toggleCartDropdown, cartItems }) => {
  let totalItemsQuantity = 0;

  if (cartItems.length > 0) {
    totalItemsQuantity = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
  }

  return (
    <div className="cart-icon" onClick={toggleCartDropdown}>
      <ShopIcon className="shop-icon" />
      <span className="item-count">{totalItemsQuantity}</span>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  toggleCartDropdown: () => dispatch(toggleCartDropdown())
});

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
