import React from 'react';
import { withRouter } from 'react-router-dom';
import * as S from './menu-item.styles';

const MenuItem = ({ history, match, remainingMenuItemProps }) => {
  const { title, imageUrl, size, linkUrl } = remainingMenuItemProps;

  const navigateToHandler = () => {
    const nextRoute = `${match.url}${linkUrl}`;
    history.push(nextRoute);
  };

  return (
    <S.MenuItemContainer size={size} onClick={navigateToHandler}>
      <S.BackgroundImageContainer
        style={{ backgroundImage: `url(${imageUrl})` }}
        className="background-image"
      />
      <S.ContentContainer className="content-container">
        <S.ContentTitle className="title">{title.toUpperCase()}</S.ContentTitle>
        <S.ContentSubtitle className="subtitle">SHOP NOW</S.ContentSubtitle>
      </S.ContentContainer>
    </S.MenuItemContainer>
  );
};

export default withRouter(MenuItem);
