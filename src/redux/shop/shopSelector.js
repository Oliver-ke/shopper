import { createSelector } from 'reselect';

const selectShop = (state) => state.shop;

// select all collections;
export const selectCollections = createSelector([ selectShop ], (shop) => shop.collections);

// select a perticular collection where the id is equa to the url params
export const selectCollection = (collectionUrlParam) =>
	createSelector([ selectCollections ], (collections) => (collections ? collections[collectionUrlParam] : null));

export const selectCollectionForPreview = createSelector(
	[ selectCollections ],
	(collections) => (collections ? Object.values(collections) : []),
);

export const selectIsCollectionFetching = createSelector([ selectShop ], (shop) => shop.isFetching);

export const selectIsCollectionLoaded = createSelector([ selectShop ], (shop) => !!shop.collections);

// !![] => false
// !!0 => false
// !!{} => true
