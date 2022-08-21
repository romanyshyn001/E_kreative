import { call, put, takeEvery } from "redux-saga/effects";
import commentApi from "../../service/commentsApi";
import {
  addComment,
  removeComment,
  getcomments,
  updateComment,
} from "../slices/comments";

function* commentsSaga({ payload: id }) {
  try {
    const res = yield call(commentApi.getComments, id);
    let data = res.data;
    yield put(getcomments(data));
  } catch (error) {
    console.log(error);
  }
}
function* updateCommentSaga(value) {
  try {
    const newData = yield call(commentApi.editComment, value.payload);
    yield put(updateComment(newData.data));
  } catch (error) {
    console.log("Error from SAGA", error);
  }
}

function* removeCommentSaga({ payload }) {
  try {
    yield call(commentApi.deleteComment, payload);
    yield put(removeComment(payload));
  } catch (error) {
    console.log("Error from SAGA", error);
  }
}
function* addCommentSaga(value) {
  try {
    const newData = yield call(commentApi.addComment, value.payload);
    yield put(addComment(newData.data));
  } catch (error) {
    console.log("Error from SAGA", error);
  }
}
function* commentWatcher() {
  yield takeEvery("comments/commentsLoading", commentsSaga);
  yield takeEvery("comments/removeCommentLoading", removeCommentSaga);
  yield takeEvery("comments/addCommentLoading", addCommentSaga);
  yield takeEvery("comments/updateCommentLoading", updateCommentSaga);
}
export default commentWatcher;
