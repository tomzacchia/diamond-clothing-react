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

/* 
  mapStateToProps is called regardless if the property we destructured
  changed or not, i.e toggleCartDropdown changes but mapStateToProps is executed
  regardless because the new Store state is a new object when compared to 
  the old Store state
*/
const mapStateToProps = state => ({
  // example of redux selector, we are manipulating data to get a new
  // custom property
  itemsCount: selectCartItemsCount(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
