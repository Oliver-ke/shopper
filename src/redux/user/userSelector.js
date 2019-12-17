import { createSelector } from 'reselect';

const selectUser = (state) => state.user;

// takes either and array or anny selector
export const selectCurrentUser = createSelector([ selectUser ], (user) => user.currentUser);
