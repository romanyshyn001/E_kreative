import { call, put, takeEvery } from "redux-saga/effects";
import announcementsApi from "../../service/announcementsApi";
import { getAnnouncements } from "../slices/announcements";

function* announcementsSaga() {
  try {
    const res = yield call(announcementsApi.getAnnouncementsApi);
    yield put(getAnnouncements(res.data));
  } catch (error) {
    console.log(error);
  }
}

function* announcementsWatcher() {
  yield takeEvery("announcements/announcementsLoading", announcementsSaga);
}
export default announcementsWatcher;
