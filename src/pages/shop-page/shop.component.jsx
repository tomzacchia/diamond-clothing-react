/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import './shop.styles.scss';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import {
  firestore,
  convertCollectionsSnapshotToMap
} from '../../firebase/firebase.utils';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CategoryPage from '../category/category.component';
import {
  updateCollections,
  fetchCollectionsStartAsync
} from '../../redux/shop/shop.actions';
import Spinner from '../../hoc/spinner.component';
import { selectIsCollectionFetching } from '../../redux/shop/shop.selector';

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
    const { match } = this.props;
    const { isFetching } = this.props;

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={props => this.renderCollectionsOveriew(isFetching, props)}
        />

        <Route
          path={`${match.path}/:categoryId`}
          render={props => this.renderCategoryPage(isFetching, props)}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isFetching: selectIsCollectionFetching(state)
});

const mapDispatchToProps = dispatch => ({
  fetchCollectionsAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
