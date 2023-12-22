import { createSelector } from '@reduxjs/toolkit';

const selectAuthentication = (state) => state.authentication;

export const selectCurrentUser = createSelector(
  [selectAuthentication],
  (authentication) => authentication.currentUser
);
