import cartActionTypes from './cart.types';

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
      const updatedCartItems = [...state.cartItems];

      updatedCartItems.push(action.payload);

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
