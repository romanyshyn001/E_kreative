import { all, fork } from 'redux-saga/effects'

import postWatcher from './articleSaga';
import commentWatcher from './commentsSaga';
import logintWatcher from './loginSaga';
import newsWatcher from './newsSaga';
import registertWatcher from './registerSaga';

export function* rootSaga() {
    yield all([
      fork(postWatcher),
      fork(commentWatcher),
      fork(newsWatcher),
      fork(logintWatcher),
      fork(registertWatcher)
    ]);
  }