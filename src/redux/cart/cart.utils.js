export default function addItemToCart(cartItems, cartItemToAdd) {
  const doesCartItemAlreadyExist = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  if (doesCartItemAlreadyExist) {
    return incrementCartItemQuantity(cartItems, cartItemToAdd);
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
}

const incrementCartItemQuantity = (cartItems, cartItemToAdd) => {
  return cartItems.map(cartItem => {
    if (cartItem.id === cartItemToAdd.id) {
      return { ...cartItem, quantity: cartItem.quantity + 1 };
    }

    return cartItem;
  });
};
