import { createActions, handleActions } from 'redux-actions';

export const {
  fetchPosts,
  fetchCategoryById,
  deletePost,
  startPostsSaga,
}: any = createActions(
  {
    FETCH_POSTS: ({ category }) => ({
      request: {
        url: '/posts',
        method: 'GET',
        params: { category },
      },
    }),
    FETCH_CATEGORY_BY_ID: (id) => ({
      request: {
        url: '/category/search',
        method: 'GET',
        params: { id },
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

const initialState = {
  data: [],
  loading: false,
  category: {
    title: '',
  },
};

export const Posts = handleActions(
  {
    [`${fetchPosts}_SUCCESS`]: (state, { payload }: any) => ({
      ...state,
      data: payload.data,
      loading: false,
    }),
    [`${fetchCategoryById}_SUCCESS`]: (state, { payload }: any) => ({
      ...state,
      category: payload.data,
    }),
    [fetchPosts]: (state) => ({
      ...state,
      ...initialState,
      loading: true,
    }),
  },
  initialState,
);
