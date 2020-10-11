import { put, takeEvery } from 'redux-saga/effects';

import { deletePost, fetchPosts } from './Posts.reducer';

function* updatePostsAfterDelete() {
  yield put(fetchPosts());
}

export default function* watchActions() {
  // @ts-ignore
  yield takeEvery(`${deletePost}_SUCCESS`, updatePostsAfterDelete);
}
