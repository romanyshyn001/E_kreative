import { all, fork } from 'redux-saga/effects'

import movieInfoWatcher from "../sagas/MovieInfo";
import movieAllSaga from "../sagas/MoviesAll";
import personageInfoWatcher from "../sagas/personageInfo";


function* rootSaga() {
  yield all([
    fork(movieAllSaga),
    fork(movieInfoWatcher),
    fork(personageInfoWatcher)
  ]);
}
export default rootSaga