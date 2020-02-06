import cartActionTypes from './cart.types';

export const toggleCartDropdown = () => ({
  type: cartActionTypes.TOGGLE_DISPLAY_CART_DROPDOWN
});

export const addCartItem = item => ({
  type: cartActionTypes.ADD_CART_ITEM,
  payload: item
});
