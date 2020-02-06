import React from 'react';
import './App.styles.scss';

import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import HomePage from './pages/home-page/home-page.component';
import ShopPage from './pages/shop-page/shop.component';
import Header from './components/header/hader.component';
import Authentication from './pages/authentication/authentication.component';
import { setCurrentUser } from './redux/user/user.actions';

class App extends React.Component {
  unsubscribeFromAuth = null;

  constructor(props) {
    super(props);
    const { setCurrentUserAction } = this.props;
    this.setCurrentUserAction = setCurrentUserAction;
  }

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(
      async authenticatedUser => {
        if (!authenticatedUser) {
          this.setCurrentUserAction(null);
          return;
        }

        const userRef = await createUserProfileDocument(authenticatedUser);

        this.updateCurrentUserInStore(userRef);
      }
    );
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  updateCurrentUserInStore = userRef => {
    userRef.onSnapshot(snapshot => {
      const { id } = snapshot;
      const snapshotData = snapshot.data();

      this.setCurrentUserAction({
        id,
        ...snapshotData
      });
    });
  };

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

const mapDispatchToProps = dispatch => {
  return {
    setCurrentUserAction: user => dispatch(setCurrentUser(user))
  };
};

export default connect(null, mapDispatchToProps)(App);
