/* eslint-disable no-shadow */
import React from 'react';
import './cart-icon.styles.scss';
import { connect } from 'react-redux';

import { ReactComponent as ShopIcon } from '../../assets/shopping-bag.svg';
import { toggleCartDropdown } from '../../redux/cart/cart.actions';

const CartIcon = ({ toggleCartDropdown }) => {
  return (
    <div className="cart-icon" onClick={toggleCartDropdown}>
      <ShopIcon className="shop-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  toggleCartDropdown: () => dispatch(toggleCartDropdown())
});

export default connect(null, mapDispatchToProps)(CartIcon);
