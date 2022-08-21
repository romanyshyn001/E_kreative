import { call, put, takeEvery } from "redux-saga/effects";
import postApi from "../../service/postApi";
import { addPost, removePost, getAllPosts, updatePost } from "../slices/posts";

function* postSaga({ payload }) {
  try {
    const res = yield call(
      postApi.getPost,
      payload.currentPage,
      payload.perPage
    );
    let data = res;
    let activePage = payload.currentPage;
    yield put(getAllPosts({ data, activePage }));
  } catch (error) {
    console.log("Error from SAGA", error);
  }
}

function* deletePostSaga({ payload }) {
  try {
    yield call(postApi.deletePost, payload);
    yield put(removePost(payload));
  } catch (error) {
    console.log("Error from SAGA", error);
  }
}

function* updatePostSaga(value) {
  try {
    const newData = yield call(postApi.editPost, value.payload);
    yield put(updatePost(newData.data));
  } catch (error) {
    console.log("Error from SAGA", error);
  }
}

function* addPostSaga(value) {
  try {
    const newData = yield call(postApi.addPost, value.payload);
    yield put(addPost(newData.data));
  } catch (error) {
    console.log("Error from SAGA", error);
  }
}
function* postWatcher() {
  yield takeEvery("posts/postLoading", postSaga);
  yield takeEvery("posts/removePostLoading", deletePostSaga);
  yield takeEvery("posts/updatePostLoading", updatePostSaga);
  yield takeEvery("posts/addPostLoading", addPostSaga);
}
export default postWatcher;
