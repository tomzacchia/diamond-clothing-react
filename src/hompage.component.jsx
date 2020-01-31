import React from 'react';

import './homepage.styles.scss';

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="menu-container">
        <div className="menu-item">
          <div className="content-container">
            <h1 className="title">HATS</h1>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content-container">
            <h1 className="title">JACKETS</h1>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content-container">
            <h1 className="title">SHOES</h1>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content-container">
            <h1 className="title">WOMEN&apos;S</h1>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content-container">
            <h1 className="title">MEN&apos;S</h1>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
