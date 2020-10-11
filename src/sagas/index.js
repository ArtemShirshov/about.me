import { all } from 'redux-saga/effects';

import AuthSaga from '../containers/Auth/ducks/Auth.saga';
import PostsSaga from '../containers/Posts/ducks/Posts.saga';
import NewPostSaga from '../containers/NewPost/ducks/NewPost.saga';

export function* mainSaga() {
  yield all([AuthSaga(), PostsSaga(), NewPostSaga()]);
}
