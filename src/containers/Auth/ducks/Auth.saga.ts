import { takeEvery } from 'redux-saga/effects';
import Cookies from 'js-cookie';

import { sendLogin } from './Auth.reducer';

function* AuthSaga({
  // @ts-ignore
  payload: { data },
}) {
  Cookies.set('Token', data.user.token);

  window.location.href = '/posts';
}

export default function* watchActions() {
  // @ts-ignore
  yield takeEvery(`${sendLogin}_SUCCESS`, AuthSaga);
}
