import cartActionTypes from './cart.types';

export const toggleCartDropdown = () => ({
  type: cartActionTypes.TOGGLE_DISPLAY_CART_DROPDOWN
});

export const addCartItem = item => ({
  type: cartActionTypes.ADD_CART_ITEM,
  payload: item
});

export const deleteCartItemById = cartItemId => ({
  type: cartActionTypes.DELETE_CART_ITEM_BY_ID,
  payload: cartItemId
});

export const decrementCartItemQuantity = cartItemId => ({
  type: cartActionTypes.DECREMENT_CART_ITEM_QUANTITY,
  payload: cartItemId
});
