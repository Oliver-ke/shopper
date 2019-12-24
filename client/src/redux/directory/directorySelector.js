import { createSelector } from 'reselect';

const selectDirectory = (state) => state.directory;

export const createDirectorySection = createSelector([ selectDirectory ], (directory) => directory);
