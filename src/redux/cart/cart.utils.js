export const addItemToCart = (cartItems, cartItemToAdd) => {
  const doesCartItemAlreadyExist = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  if (doesCartItemAlreadyExist) {
    return incrementCartItemQuantity(cartItems, cartItemToAdd);
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

const incrementCartItemQuantity = (cartItems, cartItemToAdd) => {
  return cartItems.map(cartItem => {
    if (cartItem.id === cartItemToAdd.id) {
      return { ...cartItem, quantity: cartItem.quantity + 1 };
    }

    return cartItem;
  });
};

export const decrementCartItemQuantity = (cartItems, cartItemId) => {
  const desiredItemIndex = cartItems.findIndex(
    cartItem => cartItem.id === cartItemId
  );

  const desiredCartItem = cartItems[desiredItemIndex];

  if (desiredCartItem.quantity === 1) {
    return deleteCartItemById(cartItems, cartItemId);
  }

  const updatedCartItems = cartItems.map((cartItem, index) => {
    if (index === desiredItemIndex) {
      return { ...cartItem, quantity: cartItem.quantity - 1 };
    }

    return cartItem;
  });

  return updatedCartItems;
};

export const deleteCartItemById = (cartItems, cartItemId) => {
  return cartItems.filter(cartItem => cartItem.id !== cartItemId);
};
