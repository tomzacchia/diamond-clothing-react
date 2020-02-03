import React from 'react';
import './shop.styles.scss';
import collectionsMockData from './shop.data';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class ShopPage extends React.Component {
  constructor() {
    super();

    this.state = {
      collections: collectionsMockData
    };
  }

  render() {
    const { collections } = this.state;

    const collectionsElements = collections.map(collection => {
      const { id, title, items } = collection;
      return <CollectionPreview key={id} title={title} previewItems={items} />;
    });

    return <div className="shop-page">{collectionsElements}</div>;
  }
}

export default ShopPage;
