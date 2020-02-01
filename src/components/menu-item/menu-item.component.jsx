import React from 'react';
import { withRouter } from 'react-router-dom';
import './menu-item.styles.scss';

const MenuItem = ({ history, match, remainingMenuItemProps }) => {
  const { title, imageUrl, size, linkUrl } = remainingMenuItemProps;

  let menuItemClass = 'menu-item';
  if (size) {
    menuItemClass = menuItemClass.concat(` ${size}`);
  }

  const navigateToHandler = () => {
    const nextRoute = `${match.url}${linkUrl}`;
    history.push(nextRoute);
  };

  return (
    <div className={menuItemClass} onClick={navigateToHandler}>
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className="background-image"
      />
      <div className="content-container">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

// withRouter takes a component and modifies it to give
// access to history, location, match via props
export default withRouter(MenuItem);
