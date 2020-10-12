import { createActions, handleActions } from 'redux-actions';

export const { fetchPosts, deletePost, startPostsSaga }: any = createActions(
  {
    FETCH_POSTS: ({ category }) => ({
      request: {
        url: '/posts',
        method: 'GET',
        params: { category },
      },
    }),
    DELETE_POST: (id) => ({
      request: {
        url: '/post',
        method: 'DELETE',
        params: { id },
      },
    }),
    START_POSTS_SAGA: (payload) => payload,
  },
  {
    prefix: 'POSTS',
  },
);

export const Posts = handleActions(
  {
    [`${fetchPosts}_SUCCESS`]: (state, { payload }: any) => ({
      ...state,
      data: payload.data,
      loading: false,
    }),
    [fetchPosts]: (state) => ({
      ...state,
      data: [],
      loading: true,
    }),
  },
  {
    data: [],
    loading: false,
  },
);
