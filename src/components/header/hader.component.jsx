import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './header.styles.scss';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const Header = ({ currentUser, displayCartDropdown }) => {
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

  let cartDropdownElement = null;

  if (displayCartDropdown) {
    cartDropdownElement = <CartDropdown />;
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

        <CartIcon />
      </div>

      {cartDropdownElement}
    </div>
  );
};

// here state refers the rootRooter
const mapStateToProps = ({
  user: { currentUser },
  cart: { displayCartDropdown }
}) => {
  return {
    currentUser,
    displayCartDropdown
  };
};

/*
  connect(mapStateToProps, mapDispatchToProps) returns a function
  we pass in our component into the HOC
*/
export default connect(mapStateToProps)(Header);
