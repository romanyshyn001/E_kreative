import { all, fork } from 'redux-saga/effects'
import postWatcher from './articleSaga';
import commenttWatcher from './commentsSaga';
import logintWatcher from './loginSaga';
import registertWatcher from './registerSaga';

export function* rootSaga() {
    yield all([
      fork(postWatcher),
      fork(commenttWatcher),
      fork(logintWatcher),
      fork(registertWatcher)
    ]);
  }