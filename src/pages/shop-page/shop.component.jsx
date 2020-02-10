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

class ShopPage extends React.Component {
  snapshotSubscription = null;

  componentDidMount() {
    const { updateCollectionsAction } = this.props;
    const collectionRef = firestore.collection('collections');

    collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollectionsAction(collectionsMap);
    });
  }

  render() {
    const { match } = this.props;

    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionsOverview} />

        <Route path={`${match.path}/:categoryId`} component={CategoryPage} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollectionsAction: collectionsMap =>
    dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);
