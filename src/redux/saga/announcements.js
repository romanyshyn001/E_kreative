import { call, put, takeEvery } from "redux-saga/effects";
import { newsApi } from "../../service/api";
import { getAnnouncements } from "../slices/announcements";

function* announcementsSaga({payload: id}){
    try{
        const res = yield call(newsApi.announcements, id)
        yield put(getAnnouncements(res.data))      
    } catch (error) {
        console.log(error)
    }
}


function* announcementsWatcher() {
    yield takeEvery('announcements/announcementsLoading', announcementsSaga)
}
export default announcementsWatcher