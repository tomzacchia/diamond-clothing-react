import MENU_ITEMS from './menuItems.data';

const INITAL_STATE = {
  menuItems: MENU_ITEMS
};

const menuReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};

export default menuReducer;
