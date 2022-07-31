import { call, put, takeEvery } from "redux-saga/effects";
import { commentApi } from "../../service/api";
import { addComment, delComment, getcomments, updateComment } from "../slices/comments";

function* commentsSaga({payload: id}){
    //console.log('переробити виведення коментарів Saga =>', id)   
    ///переробити виведення коментарів 
    try{
        const res = yield call(commentApi.getComments, id)
        let data = res.data
        yield put(getcomments(data))      
    } catch (error) {
        console.log(error)
    }
}
function* updateCommentSaga (value) {
    try {
        const newData = yield call(commentApi.editComment, value.payload )
        yield put(updateComment(newData.data)) 
    } catch (error) {
        console.log('Error from SAGA', error)
    }
}

function* delCommenttSaga({payload}){
    try{ 
        yield call(commentApi.delComment, payload)
        yield put(delComment(payload))      
    } catch (error) {
        console.log('Error from SAGA',error)
    }
}
function* addCommentSaga (value) {
    try {
        const newData = yield call(commentApi.addComment, value.payload)
        console.log('ValueSAGA', newData)
        yield put(addComment(newData.data)) 
    } catch (error) {
        console.log('Error from SAGA', error)
    }
}
function* commentWatcher() {
    yield takeEvery('comments/commentsLoading', commentsSaga)
    yield takeEvery('comments/delCommentLoading', delCommenttSaga)
    yield takeEvery('comments/addCommentLoading', addCommentSaga)
    yield takeEvery('comments/updateCommentLoading', updateCommentSaga)
}
export default commentWatcher