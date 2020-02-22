import React, { useEffect, lazy, Suspense } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import GlobalStyle from './global.styles';

import selectCurrentUser from './redux/user/user.selector';
import { verifyLoggedInUser as verifyLoggedInUserAction } from './redux/user/user.actions';

import HomePage from './pages/home-page/home-page.component';
import Header from './components/header/header.component';
import Spinner from './components/spinner/spinner.component';

const ShopPage = lazy(() => import('./pages/shop-page/shop.component'));
const Authentication = lazy(() => import('./pages/authentication/authentication.component'));
const Checkout = lazy(() => import('./pages/checkout/checkout.component'));


const App = ({ verifyLoggedInUser, currentUser, location: newLocation }) => {
  useEffect(() => {
    verifyLoggedInUser();
  }, [verifyLoggedInUser]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [newLocation]);

  const redirectUser = () => {
    if (currentUser) {
      return <Redirect to="/" />;
    }
    return <Authentication />;
  };

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Suspense fallback={<Spinner />}>
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/authentication" render={redirectUser} />
          <Route exact path="/checkout" component={Checkout} />
        </Suspense>
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  verifyLoggedInUser: () => dispatch(verifyLoggedInUserAction())
});

const AppWithRouter = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
);

export default AppWithRouter(App);
