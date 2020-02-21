import React from 'react';
import * as S from './category.styles';
import { connect } from 'react-redux';
import { selectCategoryById } from '../../redux/shop/shop.selector';

import CollectionItem from '../../components/collection-item/collecton-item.component';

const CategoryPage = ({ categoryItems }) => {
  const { title, items } = categoryItems;

  const categoryItemsMarkup = items.map(item => {
    return <CollectionItem key={item.id} previewItem={item} />;
  });

  return (
    <S.CategoryPageContainer>
      <S.CollectionTitle>{title}</S.CollectionTitle>
      <S.ItemsContainer>{categoryItemsMarkup}</S.ItemsContainer>
    </S.CategoryPageContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  categoryItems: selectCategoryById(ownProps.match.params.categoryId)(state)
});

export default connect(mapStateToProps)(CategoryPage);
