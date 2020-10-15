import { createSelector } from 'reselect';

import { PostType } from './Posts.types';

interface NewPostsTypes {
  data: [PostType];
  loading: boolean;
  category: any;
}

export const getPostsState = (state: { Posts: NewPostsTypes }) => state.Posts;

export const getPostsData = createSelector(
  [getPostsState],
  (postsState) => postsState.data,
);

export const getPostsLoading = createSelector(
  [getPostsState],
  (postsState) => postsState.loading,
);

export const getCategory = createSelector(
  [getPostsState],
  (postsState) => postsState.category,
);

export const getCategoryTitle = createSelector(
  [getCategory],
  (category) => category.title || '',
);
