import { createSelector } from 'reselect';

const selectShop = (state) => state.shop;

// select all collections;
export const selectCollections = createSelector([ selectShop ], (shop) => shop.collections);

// select a perticular collection where the id is equa to the url params
export const selectCollection = (collectionUrlParam) =>
	createSelector([ selectCollections ], (collections) => collections[collectionUrlParam]);

export const selectCollectionForPreview = createSelector([ selectCollections ], (collections) =>
	Object.values(collections),
);
