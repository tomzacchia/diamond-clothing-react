import cartActionTypes from './cart.types';

const INITIAL_STATE = {
  displayCartDropdown: false
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_DISPLAY_CART_DROPDOWN:
      return {
        ...state,
        displayCartDropdown: !state.displayCartDropdown
      };

    default:
      return state;
  }
};

export default cartReducer;
