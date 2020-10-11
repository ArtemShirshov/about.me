import { put, takeEvery } from 'redux-saga/effects';

import { fetchCategories } from './NewPost.reducer';
import {
  sendNewCategory,
  setOpenNewCategoryDialog,
} from '../NewCategoryDialog/ducks/NewCategoryDialog.reducer';

function* updateCategoriesAfterAddedNew() {
  yield put(fetchCategories());
  yield put(setOpenNewCategoryDialog(false));
}

export default function* watchActions() {
  // @ts-ignore
  yield takeEvery(`${sendNewCategory}_SUCCESS`, updateCategoriesAfterAddedNew);
}
