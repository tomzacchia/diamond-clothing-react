import React from 'react';
import './menu-container.styles.scss';

import { connect } from 'react-redux';

import MenuItem from '../menu-item/menu-item.component';
import selectMenuItems from '../../redux/menu/menu.selector';

const MenuContainer = ({ menuItems }) => {
  const menuItemElements = menuItems.map(menuItem => {
    const { id, ...remainingMenuItemProps } = menuItem;

    return (
      <MenuItem key={id} remainingMenuItemProps={remainingMenuItemProps} />
    );
  });
  return <div className="menu-container">{menuItemElements}</div>;
};

const mapStateToProps = state => ({
  menuItems: selectMenuItems(state)
});

export default connect(mapStateToProps)(MenuContainer);
