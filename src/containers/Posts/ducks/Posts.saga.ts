import { put, takeEvery } from 'redux-saga/effects';

import { deletePost, fetchPosts, startPostsSaga } from './Posts.reducer';

// @ts-ignore
function* postsSaga({ payload: { category } }) {
  yield put(fetchPosts({ category }));
}

export default function* watchActions() {
  // @ts-ignore
  yield takeEvery([startPostsSaga, `${deletePost}_SUCCESS`], postsSaga);
}
