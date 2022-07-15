import { call, put, takeEvery } from "redux-saga/effects";
import { api } from "../../service/api";
import { addPost, delPost, getPost, updatePost } from "../slices/article";

function* postSaga({payload}){
    try{
        const res = yield call(api.postAPI, payload.currentPage, payload.perPage)
        let data = res.data
        let activePage = payload.currentPage
        yield put(getPost({data, activePage}))      
    } catch (error) {
        console.log('Error from SAGA', error)
    }
}

function* delPostSaga({payload}){
    try{
        yield call(api.delPost, payload)
        yield put(delPost(payload))      
    } catch (error) {
        console.log('Error from SAGA',error)
    }
}

function* updatePostSaga (value) {
    try {
    console.log('ValueSAGA', value)

        const newData = yield call(api.editPost, value.payload )
        yield put(updatePost(newData.data)) 
    } catch (error) {
        console.log('Error from SAGA', error)
    }
}

function* addPostSaga (value) {
    try {
        const newData = yield call(api.addPost, value.payload )
        console.log('ValueSAGA', newData)
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