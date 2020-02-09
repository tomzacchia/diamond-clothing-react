import React from 'react';

import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import { addCartItem as addCartItemAction } from '../../redux/cart/cart.actions';
import * as S from './collection-item.styles';

const CollectionItem = ({ previewItem, addCartItem }) => {
  const { name, price, imageUrl } = previewItem;
  return (
    <S.CollectionItem>
      <S.CollectionItemImage style={{ backgroundImage: `url(${imageUrl})` }} />

      <S.CollectionItemFooter>
        <S.CollectionItemName>{name}</S.CollectionItemName>
        <S.CollectionItemPrice>{price}</S.CollectionItemPrice>
      </S.CollectionItemFooter>

      <S.CustomButtonContainer>
        <CustomButton inverted onClick={() => addCartItem(previewItem)}>
          Add to cart
        </CustomButton>
      </S.CustomButtonContainer>
    </S.CollectionItem>
  );
};

const mapDispatchToProps = dispatch => ({
  addCartItem: item => dispatch(addCartItemAction(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
