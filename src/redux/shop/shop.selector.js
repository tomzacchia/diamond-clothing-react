import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  selectShop,
  shop => shop.collections
);

export const selectCategoryById = categoryId => {
  return createSelector([selectCollections], collections =>
    findCollectionById(categoryId, collections)
  );
};

const findCollectionById = (categoryId, collections) => {
  return collections[categoryId];
};