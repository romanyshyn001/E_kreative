import { call, put, takeEvery } from "redux-saga/effects";
import { api, } from "../../service/api";
import { delComment, getcomments } from "../slices/comments";

function* commentsSaga({payload: id}){
    try{
        const res = yield call(api.commentAPI, id)
        let data = res.data
        yield put(getcomments(data))      
    } catch (error) {
        console.log(error)
    }
}

function* delCommenttSaga({payload}){
    try{ //...........add api///
        yield call(api.delCommentAPI, payload)
        yield put(delComment(payload))      
    } catch (error) {
        console.log('Error from SAGA',error)
    }
}

function* commentWatcher() {
    yield takeEvery('comments/commentsLoading', commentsSaga)
    yield takeEvery('comments/delCommentLoading', delCommenttSaga)
}
export default commentWatcher