import React from 'react';
import './cart-dropdown.styles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';

const CartDropdown = ({ cartItems }) => {
  let cartItemElements = (
    <span className="empty-message"> Your cart is empty</span>
  );

  if (cartItems.length > 0) {
    cartItemElements = cartItems.map(cartItem => {
      return <CartItem key={cartItem.id} cartItem={cartItem} />;
    });
  }

  return (
    <div className="cart-dropdown">
      <div className="cart-items">{cartItemElements}</div>

      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default connect(mapStateToProps)(CartDropdown);
