import { createActions, handleActions } from 'redux-actions';

export const { fetchPosts, deletePost } = createActions(
  {
    FETCH_POSTS: (payload) => ({
      request: {
        url: '/posts',
        method: 'GET',
      },
    }),
    DELETE_POST: (payload) => ({
      request: {
        url: '/post',
        method: 'DELETE',
        params: { id: payload },
      },
    }),
  },
  {
    prefix: 'POSTS',
  },
);

export const Posts = handleActions(
  {
    [`${fetchPosts}_SUCCESS`]: (state, { payload }) => ({
      ...state,
      // @ts-ignore
      data: payload.data,
      loading: false,
    }),
    // @ts-ignore
    [fetchPosts]: (state) => ({
      ...state,
      loading: true,
    }),
  },
  {
    data: [],
    loading: false,
  },
);
