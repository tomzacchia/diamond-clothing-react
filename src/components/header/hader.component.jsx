import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './header.styles.scss';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';

const Header = ({ currentUser }) => {
  let signInAndOutElement = (
    <Link className="option" to="/authentication">
      SIGN IN
    </Link>
  );

  if (currentUser) {
    signInAndOutElement = (
      <div className="option" onClick={() => auth.signOut()}>
        SIGN OUT
      </div>
    );
  }

  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>

        {signInAndOutElement}
      </div>
    </div>
  );
};

// here state refers the rootRooter
const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  };
};

export default connect(mapStateToProps)(Header);
