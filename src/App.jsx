import React from 'react';
import './App.styles.scss';

import { Route, Switch } from 'react-router-dom';
import { auth } from './firebase/firebase.utils';

import HomePage from './pages/home-page/home-page.component';
import ShopPage from './pages/shop-page/shop.component';
import Header from './components/header/hader.component';
import Authentication from './pages/authentication/authentication.component';

class App extends React.Component {
  unsubscribeFromAuth = null;

  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    // calling unsubscribeFromAuth will unsubscribe from updates from auth server
    this.unsubscribeFromAuth();
  }

  render() {
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
}

export default App;
