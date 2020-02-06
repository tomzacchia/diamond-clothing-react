import React from 'react';
import './cart-dropdown.styles.scss';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = ({ cartItems }) => {
  const cartItemElements = cartItems.map(cartItem => {
    return <CartItem key={cartItem.id} cartItem={cartItem} />;
  });

  return (
    <div className="cart-dropdown">
      <div className="cart-items">{cartItemElements}</div>

      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems
});

export default connect(mapStateToProps)(CartDropdown);
