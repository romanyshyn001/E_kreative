import { call, put, takeEvery } from "redux-saga/effects";
import announcementsApi from "../../service/announcementsApi";
import { ResponceTypeApi } from "../../service/mainUrl";
import { AnnouncementsType, SagaParams } from "../../types/types";
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



function* getAnnouncementsSaga({ payload }: SagaParams) {
  try {
    // throw new Error();
    const announcements: Array<AnnouncementsType> = yield call(
      announcementsApi.getAnnouncementsApi,
      payload.pageNumber
    );
    let pageNumber: number = payload.pageNumber;
    yield put(getAnnouncements({ announcements, pageNumber }));
  } catch (error) {
    yield put(getAnnouncementFailure());
  }
}

function* addAnnouncementSaga(value: any) {
  try {
    // throw new Error();
    const res: ResponceTypeApi<AnnouncementsType> = yield call(
      announcementsApi.add,
      value.payload
    );
    yield put(addAnnouncement(res.data));
  } catch (error) {
    yield put(addAnnouncementFailure());
  }
}
function* deleteAnnouncementSaga({ payload }: SagaParams) {
  try {
    // throw new Error();
    yield call(announcementsApi.remove, payload);
    yield put(removeAnnouncement(payload));
  } catch (error) {
    yield put(removeAnnouncementFailure());
  }
}
function* updateAnnouncementSaga(value: any) {
  try {
    // throw new Error();
    const newData: ResponceTypeApi<AnnouncementsType> = yield call(
      announcementsApi.edit,
      value.payload
    );
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
