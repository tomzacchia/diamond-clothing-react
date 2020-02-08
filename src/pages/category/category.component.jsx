import React from 'react';
import './category.styles.scss';
import { connect } from 'react-redux';
import { selectCategoryById } from '../../redux/shop/shop.selector';

const CategoryPage = ({ match, categoryItems }) => {
  const { categoryId } = match.params;
  console.log(categoryId);
  return (
    <div className="category-page">
      <h2>CATEGORY PAGE</h2>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  categoryItems: selectCategoryById(ownProps.match.params.categoryId)(state)
});

export default connect(mapStateToProps)(CategoryPage);
