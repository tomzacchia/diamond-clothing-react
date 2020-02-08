import React from 'react';
import './checkout-item.styles.scss';

import { connect } from 'react-redux';
import {
  deleteCartItemById,
  decrementCartItemQuantity,
  addCartItem
} from '../../redux/cart/cart.actions';

const CheckoutItem = ({
  cartItem,
  deleteCartItem,
  decrementQuantity,
  incrementQuantity
}) => {
  const { name, imageUrl, price, quantity, id } = cartItem;

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>

      <span className="name">{name}</span>

      <span className="quantity">
        <div className="arrow" onClick={() => decrementQuantity(id)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => incrementQuantity(cartItem)}>
          &#10095;
        </div>
      </span>

      <span className="price">{price}</span>

      <div className="remove-button" onClick={() => deleteCartItem(id)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  deleteCartItem: cartItemId => dispatch(deleteCartItemById(cartItemId)),
  decrementQuantity: cartItemId => {
    dispatch(decrementCartItemQuantity(cartItemId));
  },
  incrementQuantity: cartItem => dispatch(addCartItem(cartItem))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
