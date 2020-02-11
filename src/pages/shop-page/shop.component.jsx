/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import './shop.styles.scss';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CategoryPage from '../category/category.component';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import Spinner from '../../hoc/spinner.component';
import {
  selectIsCollectionFetching,
  selectIsCollectionsLoaded
} from '../../redux/shop/shop.selector';

const CollectionsOverviewWithSpinner = Spinner(CollectionsOverview);
const CategoryPageWithSpinner = Spinner(CategoryPage);

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsAsync } = this.props;
    fetchCollectionsAsync();
  }

  renderCollectionsOveriew = (isLoading, props) => (
    <CollectionsOverviewWithSpinner isLoading={isLoading} {...props} />
  );

  renderCategoryPage = (isLoading, props) => (
    <CategoryPageWithSpinner isLoading={isLoading} {...props} />
  );

  render() {
    const { match, isCollectionLoaded } = this.props;

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={props =>
            this.renderCollectionsOveriew(!isCollectionLoaded, props)
          }
        />

        <Route
          path={`${match.path}/:categoryId`}
          render={props => this.renderCategoryPage(!isCollectionLoaded, props)}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isFetching: selectIsCollectionFetching,
  isCollectionLoaded: selectIsCollectionsLoaded
});

const mapDispatchToProps = dispatch => ({
  fetchCollectionsAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
