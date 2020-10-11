import { createActions, handleActions } from 'redux-actions';

export const { sendLogin } = createActions(
  {
    SEND_LOGIN: (payload) => ({
      request: {
        url: '/login',
        method: 'POST',
        data: {
          user: payload,
        },
      },
    }),
  },
  {
    prefix: 'AUTH',
  },
);

export const Auth = handleActions(
  {
    // @ts-ignore
    [`${sendLogin}_SUCCESS`]: (_, { payload }) => payload.data,
  },
  [],
);
