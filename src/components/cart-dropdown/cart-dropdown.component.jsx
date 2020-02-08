import React from 'react';
import './cart-dropdown.styles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';

const CartDropdown = ({ cartItems, history }) => {
  let cartItemElements = (
    <span className="empty-message"> Your cart is empty</span>
  );

  if (cartItems.length > 0) {
    cartItemElements = cartItems.map(cartItem => {
      return <CartItem key={cartItem.id} cartItem={cartItem} />;
    });
  }

  const handleCheckoutClick = () => {
    history.push('/checkout');
  };

  return (
    <div className="cart-dropdown">
      <div className="cart-items">{cartItemElements}</div>

      <CustomButton onClick={handleCheckoutClick}>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

/*
  The order of wrapping matters becuase withRouter passes location, history, match
  props to component. We want the result of connect()() to be passed
  into withRouter
*/
export default withRouter(connect(mapStateToProps)(CartDropdown));
