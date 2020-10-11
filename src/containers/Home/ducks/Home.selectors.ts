import { createSelector } from 'reselect';

interface NewPostsTypes {
  statistic: any;
  loading: boolean;
}

export const getHomeState = (state: { Home: NewPostsTypes }) => state.Home;

export const getStatistic = createSelector(
  [getHomeState],
  (newFeelsState) => newFeelsState.statistic,
);

export const getLoading = createSelector(
  [getHomeState],
  (newFeelsState) => newFeelsState.loading,
);
