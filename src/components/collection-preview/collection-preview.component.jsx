/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import * as S from './collection-preview.styles';

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
    <S.CollectionPreviewContainer>
      <S.TitleContainer onClick={handleOnClick}>
        {title.toUpperCase()}
      </S.TitleContainer>
      <S.PreviewContainer>{fitleredPreviewItemsElements}</S.PreviewContainer>
    </S.CollectionPreviewContainer>
  );
};

export default CollectionPreview;
