import { call, put, takeEvery } from "redux-saga/effects";
import { api } from "../../service/api";
import { getPost } from "../slices/article";

function* postSaga({payload: id}){
    try{
        const res = yield call(api.postAPI, id)
        let data = res.data
        yield put(getPost(data))      
    } catch (error) {
        console.log(error)
    }
}

function* postWatcher() {
    yield takeEvery('posts/postLoading', postSaga)
}
export default postWatcher