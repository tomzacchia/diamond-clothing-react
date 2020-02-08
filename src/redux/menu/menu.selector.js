import { createSelector } from 'reselect';

const selectMenu = state => state.menu;

const selectMenuItems = createSelector([selectMenu], menu => menu.menuItems);

export default selectMenuItems;
