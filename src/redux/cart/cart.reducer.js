import cartActionTypes from './cart.types';
import addItemToCart from './cart.utils';

const INITIAL_STATE = {
  displayCartDropdown: false,
  cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_DISPLAY_CART_DROPDOWN:
      return {
        ...state,
        displayCartDropdown: !state.displayCartDropdown
      };

    case cartActionTypes.ADD_CART_ITEM: {
      const cartItems = [...state.cartItems];

      const updatedCartItems = addItemToCart(cartItems, action.payload);

      return {
        ...state,
        cartItems: updatedCartItems
      };
    }

    default:
      return state;
  }
};

export default cartReducer;
