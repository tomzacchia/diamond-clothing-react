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
import { updateCollections } from '../../redux/shop/shop.actions';
import Spinner from '../../hoc/spinner.component';

const CollectionsOverviewWithSpinner = Spinner(CollectionsOverview);
const CategoryPageWithSpinner = Spinner(CategoryPage);

class ShopPage extends React.Component {
  snapshotSubscription = null;

  constructor() {
    super();
    this.state = {
      isLoading: true
    };
  }

  componentDidMount() {
    const { updateCollectionsAction } = this.props;
    const collectionRef = firestore.collection('collections');

    collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollectionsAction(collectionsMap);
      this.setState({ isLoading: false });
    });
  }

  /*   
    props = match, history & location
    We use the HOC to render a spinner as data is being fetched
    when data is stored to the State, the component we want to render
    will render 
  */
  renderCollectionsOveriew = (isLoading, props) => (
    <CollectionsOverviewWithSpinner isLoading={isLoading} {...props} />
  );

  renderCategoryPage = (isLoading, props) => (
    <CategoryPageWithSpinner isLoading={isLoading} {...props} />
  );

  render() {
    const { match } = this.props;
    const { isLoading } = this.state;

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={props => this.renderCollectionsOveriew(isLoading, props)}
        />

        <Route
          path={`${match.path}/:categoryId`}
          render={props => this.renderCategoryPage(isLoading, props)}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollectionsAction: collectionsMap =>
    dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);
