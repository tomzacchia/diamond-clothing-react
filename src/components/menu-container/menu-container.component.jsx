import React from 'react';
import './menu-container.styles.scss';
import MenuItem from '../menu-item/menu-item.component';

class MenuContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      menuItems: [
        {
          title: 'hats',
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          id: 1,
          linkUrl: 'shop/hats'
        },
        {
          title: 'jackets',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          id: 2,
          linkUrl: 'shop/jackets'
        },
        {
          title: 'sneakers',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 3,
          linkUrl: 'shop/sneakers'
        },
        {
          title: 'womens',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          size: 'large',
          id: 4,
          linkUrl: 'shop/womens'
        },
        {
          title: 'mens',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          size: 'large',
          id: 5,
          linkUrl: 'shop/mens'
        }
      ]
    };
  }

  render() {
    const { menuItems } = this.state;

    const menuItemElements = menuItems.map(menuItem => {
      const { id, ...remainingMenuItemProps } = menuItem;

      return (
        <MenuItem key={id} remainingMenuItemProps={remainingMenuItemProps} />
      );
    });

    return <div className="menu-container">{menuItemElements}</div>;
  }
}

export default MenuContainer;
