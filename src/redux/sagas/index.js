import { takeEvery, put, call } from 'redux-saga/effects';

import { fetchData } from '../../api';
import { hideLoader, showLoader } from '../actions/actionLoader';

export function* sagaWatcher() {
  yield takeEvery('REQUEST_DATA', sagaWorker)
}

function* sagaWorker() {
  yield put(showLoader())
  const payload = yield call(fetchData)
  yield put({ type: 'GET_DATA', payload })
  yield put(hideLoader())
}

