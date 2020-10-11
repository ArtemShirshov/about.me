import { createSelector } from 'reselect';

interface NewPostsTypes {
  memoriesActivity: [];
  loading: boolean;
}

export const getNewFeelsState = (state: { NewFeels: NewPostsTypes }) =>
  state.NewFeels;

export const getMemoriesActivity = createSelector(
  [getNewFeelsState],
  (newFeelsState) => newFeelsState.memoriesActivity,
);

export const getLoading = createSelector(
  [getNewFeelsState],
  (newFeelsState) => newFeelsState.loading,
);
