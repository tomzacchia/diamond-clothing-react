import React from 'react';
import './category.styles.scss';
import { connect } from 'react-redux';
import { selectCategoryById } from '../../redux/shop/shop.selector';

import CollectionItem from '../../components/collection-item/collecton-item.component';

const CategoryPage = ({ categoryItems }) => {
  const { title, items } = categoryItems;

  const categoryItemsMarkup = items.map(item => {
    return <CollectionItem key={item.id} previewItem={item} />;
  });

  return (
    <div className="category-page">
      <h2 className="title">{title}</h2>
      <div className="items">{categoryItemsMarkup}</div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  categoryItems: selectCategoryById(ownProps.match.params.categoryId)(state)
});

export default connect(mapStateToProps)(CategoryPage);
