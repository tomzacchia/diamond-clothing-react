/* eslint-disable react/jsx-curly-newline */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import './shop.styles.scss';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CategroyContainer from '../category/category.container';

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsAsync } = this.props;
    fetchCollectionsAsync();
  }

  componentDidUpdate(prevProps) {
    const { location: newLocation } = this.props;
    if (newLocation !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    const { match } = this.props;

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />

        <Route
          path={`${match.path}/:categoryId`}
          component={CategroyContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsAsync: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);
