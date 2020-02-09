import React from 'react';
import './collection-preview.styles.scss';

import CollectionItem from '../collection-item/collecton-item.component';

const CollectionPreview = ({ title, previewItems }) => {
  const filterPreviewItems = previewItems.filter((item, index) => index < 4);

  const fitleredPreviewItemsElements = filterPreviewItems.map(previewItem => {
    return <CollectionItem key={previewItem.id} previewItem={previewItem} />;
  });

  return (
    <div className="preview-container">
      <h1 className="preview-title">{title.toUpperCase()}</h1>
      <div className="preview">{fitleredPreviewItemsElements}</div>
    </div>
  );
};

export default CollectionPreview;
