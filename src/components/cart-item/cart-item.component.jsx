/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import './cart-item.styles.scss';

const CartItem = ({ cartItem }) => {
  const { imageUrl, price, name, quantity } = cartItem;
  return (
    <div className="cart-item">
      <img src={imageUrl} alt={name} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="name">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default React.memo(CartItem);
