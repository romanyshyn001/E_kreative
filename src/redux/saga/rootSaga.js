import { all, fork } from 'redux-saga/effects'

import postWatcher from './articleSaga';
import commentWatcher from './commentsSaga';
import logintWatcher from './authSaga';
import newsWatcher from './newsSaga';

export function* rootSaga() {
    yield all([
      fork(postWatcher),
      fork(commentWatcher),
      fork(newsWatcher),
      fork(logintWatcher),
    ]);
  }