import { call, put, takeEvery } from "redux-saga/effects";
import postApi from "../../service/postApi";
import {
  addPost,
  removePost,
  getAllPosts,
  updatePost,
  getPostFailure,
  editFailure,
  removePostFailure,
  addPostFailure,
} from "../slices/postSlices/posts";

function* postSaga({ payload }) {
  try {
    const posts = yield call(
      postApi.getPost,
      payload.currentPage,
      payload.perPage
    );
    let currentPage = payload.currentPage;
    yield put(getAllPosts({ posts, currentPage }));
  } catch (error) {
    yield put(getPostFailure());
  }
}

function* deletePostSaga({ payload }) {
  try {
    // throw new Error();
    yield call(postApi.deletePost, payload);
    yield put(removePost(payload));
  } catch (error) {
    yield put(removePostFailure());
  }
}

function* updatePostSaga(value) {
  try {
    // throw new Error();
    const newData = yield call(postApi.editPost, value.payload);
    yield put(updatePost(newData.data));
  } catch (error) {
    yield put(editFailure());
  }
}

function* addPostSaga(value) {
  try {
    // throw new Error();
    const posts = yield call(postApi.addPost, value.payload);
    
    yield put(addPost(posts.data));
  } catch (error) {
    yield put(addPostFailure());
  }
}
function* postWatcher() {
  yield takeEvery("posts/postLoading", postSaga);
  yield takeEvery("posts/removePostLoading", deletePostSaga);
  yield takeEvery("posts/updatePostLoading", updatePostSaga);
  yield takeEvery("posts/addPostLoading", addPostSaga);
}
export default postWatcher;
