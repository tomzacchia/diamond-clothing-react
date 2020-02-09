import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import selectCurrentUser from '../../redux/user/user.selector';
import { selectDisplayCartDropdown } from '../../redux/cart/cart.selectors';

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  SvgLogo
} from './header.styles';

const Header = ({ currentUser, displayCartDropdown }) => {
  let signInAndOutMarkup = (
    <OptionLink to="/authentication">SIGN IN</OptionLink>
  );

  if (currentUser) {
    signInAndOutMarkup = (
      <OptionLink as="div" onClick={() => auth.signOut()}>
        SIGN OUT
      </OptionLink>
    );
  }

  let cartDropdownMarkup = null;

  if (displayCartDropdown) {
    cartDropdownMarkup = <CartDropdown />;
  }

  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <SvgLogo />
      </LogoContainer>

      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>

        <OptionLink to="/contact">CONTACT</OptionLink>

        {signInAndOutMarkup}

        <CartIcon />
      </OptionsContainer>

      {cartDropdownMarkup}
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  displayCartDropdown: selectDisplayCartDropdown
});

export default connect(mapStateToProps)(Header);
