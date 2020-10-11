import { createSelector } from 'reselect';

interface NewPostsTypes {
  categories: [];
  loading: boolean;
  loadingPostData: boolean;
  post: any;
}

export const getNewPostState = (state: { NewPosts: NewPostsTypes }) =>
  state.NewPosts;

export const getNewPostCategories = createSelector(
  [getNewPostState],
  (newPostState) => newPostState.categories,
);

export const getPost = createSelector(
  [getNewPostState],
  (newPostState) => newPostState.post,
);

export const getNewPostLoading = createSelector(
  [getNewPostState],
  (newPostState) => newPostState.loading,
);

export const getPostDataLoading = createSelector(
  [getNewPostState],
  (newPostState) => newPostState.loadingPostData,
);
