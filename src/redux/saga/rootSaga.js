import { all, fork } from 'redux-saga/effects'

import postWatcher from './postsSaga';
import commentWatcher from './commentsSaga';
import logintWatcher from './authSaga';
import announcementsWatcher from './announcements';

export function* rootSaga() {
    yield all([
      fork(postWatcher),
      fork(commentWatcher),
      fork(announcementsWatcher),
      fork(logintWatcher),
    ]);
  }