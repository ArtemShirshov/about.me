import { createActions, handleActions } from 'redux-actions';

export const {
  fetchMemoriesActivity,
  fetchMemories,
  sendFeels,
}: any = createActions(
  {
    FETCH_MEMORIES_ACTIVITY: () => ({
      request: {
        url: '/memories-activity',
        method: 'GET',
      },
    }),
    FETCH_MEMORIES: () => ({
      request: {
        url: '/memories',
        method: 'GET',
      },
    }),
    SEND_FEELS: (payload) => ({
      request: {
        url: '/memories',
        method: 'POST',
        data: payload,
      },
    }),
  },
  {
    prefix: 'NEW_FEELS',
  },
);

const initialState = {
  memoriesActivity: [],
  loading: false,
};

export const NewFeels = handleActions(
  {
    [`${fetchMemoriesActivity}_SUCCESS`]: (state, { payload }: any) => ({
      ...state,
      memoriesActivity: payload.data,
    }),
    [sendFeels]: (state) => ({
      ...state,
      loading: true,
    }),
    // [`${fetchPost}_SUCCESS`]: (state, { payload }: any) => ({
    //   ...state,
    //   post: payload.data[0],
    //   loadingPostData: false,
    // }),
    // [sendPost]: (state) => ({
    //   ...state,
    //   loading: true,
    // }),
    // // @ts-ignore
    // [combineActions(
    //   `${fetchCategories}_SUCCESS`,
    //   `${fetchCategories}_ERROR`,
    // )]: (state) => ({
    //   ...state,
    //   loading: false,
    // }),
  },
  initialState,
);
