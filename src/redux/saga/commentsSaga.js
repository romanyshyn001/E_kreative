import { call, put, takeEvery } from "redux-saga/effects";
import commentApi from "../../service/commentsApi";
import {
  addComment,
  removeComment,
  getcomments,
  updateComment,
  editCommentFailure,
  getCommentFailure,
  removeCommentFailure,
  addCommentFailure,
} from "../slices/commentSlices/comments";

function* commentsSaga({ payload: id }) {
  try {
    // throw new Error()
    const res = yield call(commentApi.getComments, id);
    let comments = res.data;
    yield put(getcomments({ comments }));
  } catch (error) {
    yield put(getCommentFailure());
  }
}
function* updateCommentSaga(value) {
  try {
    // throw new Error()
    const newData = yield call(commentApi.editComment, value.payload);
    yield put(updateComment(newData.data));
  } catch (error) {
    yield put(editCommentFailure());
  }
}

function* removeCommentSaga({ payload }) {
  try {
    // throw new Error()
    yield call(commentApi.deleteComment, payload);
    yield put(removeComment(payload));
  } catch (error) {
    yield put(removeCommentFailure());
  }
}
function* addCommentSaga(value) {
  try {
    // throw new Error()
    const newData = yield call(commentApi.addComment, value.payload);
    yield put(addComment(newData.data));
  } catch (error) {
    yield put(addCommentFailure());
  }
}
function* commentWatcher() {
  yield takeEvery("comments/commentsLoading", commentsSaga);
  yield takeEvery("comments/removeCommentLoading", removeCommentSaga);
  yield takeEvery("comments/addCommentLoading", addCommentSaga);
  yield takeEvery("comments/updateCommentLoading", updateCommentSaga);
}
export default commentWatcher;
