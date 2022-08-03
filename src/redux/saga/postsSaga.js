import { call, put, takeEvery } from "redux-saga/effects";
import { postApi } from "../../service/api";
import { addPost, delPost, getPost, updatePost } from "../slices/posts";

function* postSaga({payload}){
    try{
        const res = yield call(postApi.getPost, payload.currentPage, payload.perPage)
        let data = res.data
        let activePage = payload.currentPage
        yield put(getPost({data, activePage}))      
    } catch (error) {
        console.log('Error from SAGA', error)
    }
}

function* delPostSaga({payload}){
    try{
        yield call(postApi.delPost, payload)
        yield put(delPost(payload))      
    } catch (error) {
        console.log('Error from SAGA',error)
    }
}

function* updatePostSaga (value) {
    try {
        const newData = yield call(postApi.editPost, value.payload )
        yield put(updatePost(newData.data)) 
    } catch (error) {
        console.log('Error from SAGA', error)
    }
}

function* addPostSaga (value) {
    try {
        const newData = yield call(postApi.addPost, value.payload )
        yield put(addPost(newData.data)) 
    } catch (error) {
        console.log('Error from SAGA', error)
    }
}
function* postWatcher() {
    yield takeEvery('posts/postLoading', postSaga)
    yield takeEvery('posts/delPostLoading', delPostSaga)
    yield takeEvery('posts/updatePostLoading', updatePostSaga)
    yield takeEvery('posts/addPostLoading', addPostSaga)
}
export default postWatcher