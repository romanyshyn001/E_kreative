import { call, put, takeEvery } from "redux-saga/effects";
import { api } from "../../service/api";
import { delPost, getPost, updatePost, updatePostLoading } from "../slices/article";

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
function* delPostSaga({payload}){
    try{
        yield call(api.delPost, payload)
        yield put(delPost(payload))      
    } catch (error) {
        console.log(error)
    }
}

function* updatePostSaga (value) {
    try {
        // const options = [value.payload.id, value.payload.title, value.payload.body, value.payload.userId, value.payload.createdAt, value.payload.updatedAt]
        const newData = yield call(api.editPost, value.payload ); // Refer sample to api calls in remote.js file
        console.log('value SAGA', newData)
        yield put(updatePost(newData.data)) // pass in the id you updated and the newData returned from the API
    } catch (e) {
    }
  }

function* postWatcher() {
    yield takeEvery('posts/postLoading', postSaga)
    yield takeEvery('posts/delPostLoading', delPostSaga)
    yield takeEvery('posts/updatePostLoading', updatePostSaga)
}
export default postWatcher