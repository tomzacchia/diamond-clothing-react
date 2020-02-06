import React from 'react';
import './App.styles.scss';

import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import HomePage from './pages/home-page/home-page.component';
import ShopPage from './pages/shop-page/shop.component';
import Header from './components/header/hader.component';
import Authentication from './pages/authentication/authentication.component';
import { setCurrentUser as setCurrentUserAction } from './redux/user/user.actions';

class App extends React.Component {
  unsubscribeFromAuth = null;

  constructor(props) {
    super(props);
    const { setCurrentUser } = this.props;
    this.setCurrentUser = setCurrentUser;
  }

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(
      async authenticatedUser => {
        if (!authenticatedUser) {
          this.setCurrentUser(null);
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

      this.setCurrentUser({
        id,
        ...snapshotData
      });
    });
  };

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
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => {
  return {
    currentUser: user.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setCurrentUser: user => dispatch(setCurrentUserAction(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
