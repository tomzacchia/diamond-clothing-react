import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.styles.scss';

import HomePage from './pages/home-page/home-page.component';
import ShopPage from './pages/shop-page/shop.component';
import Header from './components/header/hader.component';
import Authentication from './pages/authentication/authentication.component';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/authentication" component={Authentication} />
      </Switch>
    </div>
  );
}

export default App;
