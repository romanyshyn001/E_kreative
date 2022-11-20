import { SagaParams, CommentsType } from "./../../types/types";
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

function* commentsSaga() {
  try {
    // throw new Error()
    const res = yield call(commentApi.getComments);
    let comments: Array<CommentsType> = res.data;
    yield put(getcomments({ comments }));
  } catch (error) {
    yield put(getCommentFailure());
  }
}
function* updateCommentSaga(value: any) {
  try {
    // throw new Error()
    const newData: CommentsType = yield call(
      commentApi.editComment,
      value.payload
    );
    yield put(updateComment(newData));
  } catch (error) {
    yield put(editCommentFailure());
  }
}

function* removeCommentSaga({ payload }: SagaParams) {
  try {
    // throw new Error()
    yield call(commentApi.deleteComment, payload);
    yield put(removeComment(payload));
  } catch (error) {
    yield put(removeCommentFailure());
  }
}
function* addCommentSaga(value: any) {
  try {
    // throw new Error()
    const newData: CommentsType = yield call(
      commentApi.addComment,
      value.payload
    );
    yield put(addComment(newData));
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
