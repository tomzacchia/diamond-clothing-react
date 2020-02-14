import cartActionTypes from './cart.types';
import {
  addItemToCart,
  deleteCartItemById,
  decrementCartItemQuantity
} from './cart.utils';

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
      const cartItem = action.payload;
      const cartItems = [...state.cartItems];

      const updatedCartItems = addItemToCart(cartItems, cartItem);

      return {
        ...state,
        cartItems: updatedCartItems
      };
    }

    case cartActionTypes.DELETE_CART_ITEM_BY_ID: {
      const cartItemId = action.payload;
      const cartItems = [...state.cartItems];

      const updatedCartItems = deleteCartItemById(cartItems, cartItemId);

      return { ...state, cartItems: updatedCartItems };
    }

    case cartActionTypes.DECREMENT_CART_ITEM_QUANTITY: {
      const cartItemId = action.payload;
      const cartItems = [...state.cartItems];

      const updatedCartItems = decrementCartItemQuantity(cartItems, cartItemId);

      return { ...state, cartItems: updatedCartItems };
    }

    case cartActionTypes.EMPTY_CART:
      return { ...state, cartItems: [] };

    default:
      return state;
  }
};

export default cartReducer;
