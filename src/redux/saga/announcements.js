import { call, put, takeEvery } from "redux-saga/effects";
import announcementsApi from "../../service/announcementsApi";
import {
  addAnnouncement,
  addAnnouncementFailure,
  editAnnouncementFailure,
  getAnnouncementFailure,
  getAnnouncements,
  removeAnnouncement,
  removeAnnouncementFailure,
  updateAnnouncement,
} from "../slices/announcementSlices/announcements";

function* getAnnouncementsSaga({ payload }) {
  try {
    // throw new Error();
    const responce = yield call(
      announcementsApi.getAnnouncementsApi,
      payload.pageNumber
    );
    let data = responce;
    let activePage = payload.pageNumber;
    yield put(getAnnouncements({ data, activePage }));
  } catch (error) {
    yield put(getAnnouncementFailure());
  }
}

function* addAnnouncementSaga(value) {
  try {
    // throw new Error();
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
    yield put(removeAnnouncementFailure());
  }
}
function* updateAnnouncementSaga(value) {
  try {
    throw new Error();
    const newData = yield call(announcementsApi.edit, value.payload);
    yield put(updateAnnouncement(newData.data));
  } catch (error) {
    yield put(editAnnouncementFailure());
  }
}

function* announcementsWatcher() {
  yield takeEvery("announcements/announcementsLoading", getAnnouncementsSaga);
  yield takeEvery("announcements/addAnnouncementLoading", addAnnouncementSaga);
  yield takeEvery(
    "announcements/removeAnnouncementLoading",
    deleteAnnouncementSaga
  );
  yield takeEvery(
    "announcements/updateAnnouncementLoading",
    updateAnnouncementSaga
  );
}
export default announcementsWatcher;
