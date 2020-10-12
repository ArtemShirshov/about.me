import { createSelector } from 'reselect';

export const getRouterState = (state) => state.router;

export const getLocation = createSelector(
  [getRouterState],
  (router) => router.location,
);

export const getLocationQuery = createSelector(
  [getLocation],
  (location) => location.query,
);
