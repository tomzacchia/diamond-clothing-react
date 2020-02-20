import React from 'react';
import * as S from './cart-dropdown.styles';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartDropdown } from '../../redux/cart/cart.actions';

const CartDropdown = ({ cartItems, history, dispatch }) => {
  let cartItemElements = (
    <S.EmptyMessageContainer> Your cart is empty</S.EmptyMessageContainer>
  );

  if (cartItems.length > 0) {
    cartItemElements = cartItems.map(cartItem => {
      return <CartItem key={cartItem.id} cartItem={cartItem} />;
    });
  }

  const handleCheckoutClick = () => {
    history.push('/checkout');
    dispatch(toggleCartDropdown());
  };

  return (
    <S.CartDropdownContainer>
      <S.CartItemsContainer>{cartItemElements}</S.CartItemsContainer>

      <CustomButton onClick={handleCheckoutClick}>GO TO CHECKOUT</CustomButton>
    </S.CartDropdownContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
