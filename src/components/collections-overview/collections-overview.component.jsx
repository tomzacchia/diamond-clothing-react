import React from 'react';
import './collections-overview.styles.scss';
import { connect } from 'react-redux';

import { selectCollections } from '../../redux/shop/shop.selector';
import CollectionPreview from '../collection-preview/collection-preview.component';

const CollectionsOverview = ({ collections }) => {
  const collectionsElements = collections.map(collection => {
    const { id, title, items } = collection;
    return <CollectionPreview key={id} title={title} previewItems={items} />;
  });

  return <div className="collections-overview">{collectionsElements}</div>;
};

const mapStateToProps = state => ({
  collections: selectCollections(state)
});

export default connect(mapStateToProps)(CollectionsOverview);
