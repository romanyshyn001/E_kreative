import { call, put, takeEvery } from "redux-saga/effects";
import { api } from "../../service/api";
import { getPost } from "../slices/article";

function* postSaga({payload}){
    
    try{
        const res = yield call(api.postAPI, payload.currentPage, payload.perPage)
        let data = res.data
        let activePage = payload.currentPage
        yield put(getPost({data, activePage}))      
    } catch (error) {
        console.log(error)
    }
}

function* postWatcher() {
    yield takeEvery('posts/postLoading', postSaga)
}
export default postWatcher