import { call, put, takeEvery } from "redux-saga/effects";
import announcementsApi from "../../service/announcementsApi";
import {
  addAnnouncement,
  addAnnouncementFailure,
  getAnnouncements,
  removeAnnouncement,
} from "../slices/announcementSlices/announcements";

function* getAnnouncementsSaga() {
  try {
    const res = yield call(announcementsApi.getAnnouncementsApi);
    yield put(getAnnouncements(res.data));
  } catch (error) {
    console.log(error);
  }
}
function* addAnnouncementSaga(value) {
  try {
    const res = yield call(announcementsApi.add, value.payload);
    yield put(addAnnouncement(res.data));
  } catch (error) {
    yield put(addAnnouncementFailure());
  }
}
function* deleteAnnouncementSaga({ payload }) {
  try {
    // throw new Error();
    yield call(announcementsApi.remove, payload);
    yield put(removeAnnouncement(payload));
  } catch (error) {
    // yield put(removeAnnouncementFail());
  }
}

function* announcementsWatcher() {
  yield takeEvery("announcements/announcementsLoading", getAnnouncementsSaga);
  yield takeEvery("announcements/addAnnouncementLoading", addAnnouncementSaga);
  yield takeEvery("announcements/removeAnnouncementLoading", deleteAnnouncementSaga);
}
export default announcementsWatcher;
