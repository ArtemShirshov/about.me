import { createActions, handleActions } from 'redux-actions';

export const { setOpenNewCategoryDialog, sendNewCategory } = createActions(
  {
    SET_OPEN_NEW_CATEGORY_DIALOG: (payload) => payload,
    SEND_NEW_CATEGORY: (payload) => ({
      request: {
        url: '/category',
        method: 'POST',
        data: payload,
      },
    }),
  },
  {
    prefix: 'NEW_CATEGORY_DIALOG',
  },
);

const initialState = {
  isOpen: false,
};

export const NewCategoryDialog = handleActions(
  {
    // @ts-ignore
    [setOpenNewCategoryDialog]: (state, { payload }) => ({
      ...state,
      // @ts-ignore
      isOpen: payload,
    }),
  },
  initialState,
);
