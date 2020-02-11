import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  selectShop,
  shop => shop.collections
);

export const selectCollectionsAsArray = createSelector(
  selectCollections,
  collections => {
    if (!collections) return [];

    return Object.keys(collections).map(key => collections[key]);
  }
);

export const selectCategoryById = categoryId => {
  return createSelector([selectCollections], collections =>
    findCollectionById(categoryId, collections)
  );
};

export const selectIsCollectionFetching = createSelector(
  selectShop,
  shop => shop.isFetching
);

const findCollectionById = (categoryId, collections) => {
  if (!collections) return null;

  return collections[categoryId];
};
