import { createSelector } from 'reselect';

const selectUser = (state) => state.user;

// takes either and array or anny selector
export const selectCurrentUser = createSelector([ selectUser ], (user) => user.currentUser);

export const selectIsSignUpLoading = createSelector([ selectUser ], (user) => user.isSignUpLoading);

export const selectIsSignInLoading = createSelector([ selectUser ], (user) => user.isSignInLoading);
