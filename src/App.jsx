import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/home-page/home-page.component';
import ShopPage from './pages/shop-page/shop.component';
import './App.styles.scss';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
