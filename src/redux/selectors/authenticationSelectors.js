import { createSelector } from '@reduxjs/toolkit';

const selectAuthentication = (state) => state.authentication;

export const selectCurrentUser = createSelector(
  [selectAuthentication],
  (authentication) => authentication.currentUser
);


export const selectToken = createSelector(
  [selectAuthentication],
  (authentication) => authentication.token
);
