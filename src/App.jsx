import React from 'react';
import './App.styles.scss';

import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import selectCurrentUser from './redux/user/user.selector';
import { verifyLoggedInUser as verifyLoggedInUserAction } from './redux/user/user.actions';

import HomePage from './pages/home-page/home-page.component';
import ShopPage from './pages/shop-page/shop.component';
import Header from './components/header/header.component';
import Authentication from './pages/authentication/authentication.component';
import Checkout from './pages/checkout/checkout.component';

class App extends React.Component {
  componentDidMount() {
    const { verifyLoggedInUser } = this.props;
    verifyLoggedInUser();
  }

  render() {
    const redirectUser = () => {
      const { currentUser } = this.props;

      if (currentUser) {
        return <Redirect to="/" />;
      }
      return <Authentication />;
    };

    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/authentication" render={redirectUser} />
          <Route exact patch="/checkout" component={Checkout} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  verifyLoggedInUser: () => dispatch(verifyLoggedInUserAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
