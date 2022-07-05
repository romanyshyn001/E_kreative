import { call, put, takeEvery } from "redux-saga/effects";
import { api, } from "../../service/api";
import { getNews } from "../slices/announcements";

function* newsSaga({payload: id}){
    try{
        const res = yield call(api.announcements, id)
        yield put(getNews(res))      
    } catch (error) {
        console.log(error)
    }
}


function* newsWatcher() {
    yield takeEvery('news/newsLoading', newsSaga)
}
export default newsWatcher