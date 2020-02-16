/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import './collection-preview.styles.scss';

import CollectionItem from '../collection-item/collecton-item.component';

const CollectionPreview = ({ title, previewItems, currentUrl, history }) => {
  const filterPreviewItems = previewItems.filter((item, index) => index < 4);

  const fitleredPreviewItemsElements = filterPreviewItems.map(previewItem => {
    return <CollectionItem key={previewItem.id} previewItem={previewItem} />;
  });

  const handleOnClick = () => {
    const nextRoute = `${currentUrl}/${title.toLowerCase()}`;
    history.push(nextRoute);
  };

  return (
    <div className="preview-container">
      <h1 className="preview-title" onClick={handleOnClick}>
        {title.toUpperCase()}
      </h1>
      <div className="preview">{fitleredPreviewItemsElements}</div>
    </div>
  );
};

export default CollectionPreview;
