import { call, put, takeEvery } from "redux-saga/effects";
import authApi from "../../service/authApi";
import {
  authorizeFailure,
  loginFulfilled,
  logoutFulfilled,
  registerFulfilled,
} from "../slices/authMe";

function* loginSaga(credentials) {
  try {
    const res = yield call(authApi.login, credentials.payload);
    localStorage.setItem("token", JSON.stringify(res.data.accessToken));
    localStorage.setItem("user", JSON.stringify(res.data.user));
    yield put(loginFulfilled(res.data));
  } catch (error) {
    yield put(authorizeFailure());
  }
}

function* logoutSaga() {
  try {
    throw new Error();
  } catch (error) {
    localStorage.clear();
    yield put(logoutFulfilled());
  }
}

function* registerSaga(credentials) {
  try {
    const res = yield call(authApi.register, credentials.payload);
    localStorage.setItem("token", JSON.stringify(res.data.accessToken));
    localStorage.setItem("user", JSON.stringify(res.data.user));
    yield put(registerFulfilled(res.data.user));
  } catch (error) {
    yield put(authorizeFailure());
  }
}

function* logintWatcher() {
  yield takeEvery("authMe/loginLoading", loginSaga);
  yield takeEvery("authMe/logoutLoading", logoutSaga);
  yield takeEvery("authMe/registerLoading", registerSaga);
}
export default logintWatcher;
