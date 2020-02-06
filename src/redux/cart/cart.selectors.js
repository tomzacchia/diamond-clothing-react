import { createSelector } from 'reselect';

// Input selector is typically 1 level deep
const selectCart = state => state.cart;

// Array of input selectors
// The output of our selectors are memoized
export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
);

/* 
  [selectCart, selectUser],
  (cart, user) => cart.cartItems
*/
