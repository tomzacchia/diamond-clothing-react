import React from 'react';
import './collection-item.styles.scss';

import CustomButton from '../custom-button/custom-button.component';

const CollectionItem = ({ id, name, price, imageUrl }) => {
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
      <CustomButton className="custom-button" inverted>
        Add to cart
      </CustomButton>
    </div>
  );
};

export default CollectionItem;
