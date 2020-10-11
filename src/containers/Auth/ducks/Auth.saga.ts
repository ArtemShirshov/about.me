import { put, takeEvery } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import Cookies from 'js-cookie';

import { sendLogin } from './Auth.reducer';

function* AuthSaga({
  // @ts-ignore
  payload: { data },
}) {
  Cookies.set('Token', data.user.token);

  yield put(push('/posts'));
}

export default function* watchActions() {
  // @ts-ignore
  yield takeEvery(`${sendLogin}_SUCCESS`, AuthSaga);
}
