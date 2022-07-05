import { call, put, takeEvery } from "redux-saga/effects";
import { api, } from "../../service/api";
import { getcomments } from "../slices/comments";

function* commentsSaga({payload: id}){
    try{
        const res = yield call(api.commentAPI, id)
        let data = res.data
        yield put(getcomments(data))      
    } catch (error) {
        console.log(error)
    }
}

function* commentWatcher() {
    yield takeEvery('comments/commentsLoading', commentsSaga)
}
export default commentWatcher