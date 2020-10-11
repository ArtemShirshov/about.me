import { createActions, handleActions } from 'redux-actions';

export const { fetchStatistic }: any = createActions(
  {
    FETCH_STATISTIC: () => ({
      request: {
        url: '/statistic',
        method: 'GET',
      },
    }),
  },
  {
    prefix: 'HOME',
  },
);

const initialState = {
  statistic: {
    total_posts_written: null,
  },
  loading: false,
};

export const Home = handleActions(
  {
    [fetchStatistic]: (state) => ({
      ...state,
      loading: true,
    }),
    [`${fetchStatistic}_SUCCESS`]: (state, { payload }: any) => ({
      ...state,
      statistic: payload.data,
    }),
  },
  initialState,
);
