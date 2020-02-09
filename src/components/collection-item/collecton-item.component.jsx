import React from 'react';
import './collection-item.styles.scss';

import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import { addCartItem as addCartItemAction } from '../../redux/cart/cart.actions';

const CollectionItem = ({ previewItem, addCartItem }) => {
  const { name, price, imageUrl } = previewItem;
  return (
    <div className="collection-item">
      <div
        className="collection-item-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="collection-item-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton
        className="custom-button"
        inverted
        onClick={() => addCartItem(previewItem)}
      >
        Add to cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addCartItem: item => dispatch(addCartItemAction(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
