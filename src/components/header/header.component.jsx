import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import selectCurrentUser from '../../redux/user/user.selector';
import { selectDisplayCartDropdown } from '../../redux/cart/cart.selectors';
import { singOutStart as singOutStartAction } from '../../redux/user/user.actions';

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  SvgLogo
} from './header.styles';

const Header = ({ currentUser, displayCartDropdown, signOutUser }) => {
  let signInAndOutMarkup = (
    <OptionLink to="/authentication">SIGN IN</OptionLink>
  );

  if (currentUser) {
    signInAndOutMarkup = (
      <OptionLink as="div" onClick={signOutUser}>
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

        {/* <OptionLink to="/contact">CONTACT</OptionLink> */}

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

const mapDispatchToProps = dispatch => ({
  signOutUser: () => dispatch(singOutStartAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
