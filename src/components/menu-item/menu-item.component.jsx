import React from 'react';
import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size }) => {
  let menuItemClass = 'menu-item';

  if (size) {
    menuItemClass = menuItemClass.concat(` ${size}`);
  }

  return (
    <div
      style={{ backgroundImage: `url(${imageUrl})` }}
      className={menuItemClass}
    >
      <div className="content-container">
        <h1 className="title">{title}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
