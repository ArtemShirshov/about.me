import { createActions, handleActions, combineActions } from 'redux-actions';

export const { fetchCategories, fetchPost, sendPost }: any = createActions(
  {
    FETCH_CATEGORIES: (payload) => ({
      request: {
        url: '/category',
        method: 'GET',
      },
    }),
    FETCH_POST: (payload) => ({
      request: {
        url: '/post',
        method: 'GET',
        params: { id: payload },
      },
    }),
    SEND_POST: (payload) => ({
      request: {
        url: '/post',
        method: 'POST',
        data: payload,
      },
    }),
  },
  {
    prefix: 'NEW_POST',
  },
);

const initialState = {
  categories: [],
  post: {
    title: '',
    text: '',
    categories: [],
  },
  loadingPostData: false,
};

export const NewPosts = handleActions(
  {
    [`${fetchCategories}_SUCCESS`]: (state, { payload }: any) => ({
      ...state,
      categories: payload.data,
    }),
    [fetchPost]: (state) => ({
      ...state,
      loadingPostData: true,
    }),
    [`${fetchPost}_SUCCESS`]: (state, { payload }: any) => ({
      ...state,
      post: payload.data[0],
      loadingPostData: false,
    }),
    [sendPost]: (state) => ({
      ...state,
      loading: true,
    }),
    // @ts-ignore
    [combineActions(
      `${fetchCategories}_SUCCESS`,
      `${fetchCategories}_ERROR`,
    )]: (state) => ({
      ...state,
      loading: false,
    }),
  },
  initialState,
);
