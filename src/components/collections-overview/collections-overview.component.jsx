import React from 'react';
import './collections-overview.styles.scss';
import { connect } from 'react-redux';

import { selectCollectionsAsArray } from '../../redux/shop/shop.selector';
import CollectionPreview from '../collection-preview/collection-preview.component';

const CollectionsOverview = ({ collections, match, history }) => {
  const { url } = match;
  const collectionsElements = collections.map(collection => {
    const { id, title, items } = collection;
    return (
      <CollectionPreview
        key={id}
        title={title}
        previewItems={items}
        currentUrl={url}
        history={history}
      />
    );
  });

  return <div className="collections-overview">{collectionsElements}</div>;
};

const mapStateToProps = state => ({
  collections: selectCollectionsAsArray(state)
});

export default connect(mapStateToProps)(CollectionsOverview);
