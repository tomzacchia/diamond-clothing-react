/* eslint-disable no-shadow */
import React from 'react';
import './cart-icon.styles.scss';
import { connect } from 'react-redux';

import { ReactComponent as ShopIcon } from '../../assets/shopping-bag.svg';
import { toggleCartDropdown } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

const CartIcon = ({ toggleCartDropdown, itemsCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCartDropdown}>
      <ShopIcon className="shop-icon" />
      <span className="item-count">{itemsCount}</span>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  toggleCartDropdown: () => dispatch(toggleCartDropdown())
});

const mapStateToProps = state => ({
  itemsCount: selectCartItemsCount(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
