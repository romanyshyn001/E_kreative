import { AuthorizeUserType, SagaParams, UserType } from "./../../types/types";
import { call, put, takeEvery } from "redux-saga/effects";
import authApi from "../../service/authApi";
import {
  authorizeFailure,
  loginFulfilled,
  logoutFulfilled,
  registerFulfilled,
} from "../slices/authMe";

function* loginSaga({ payload }: SagaParams) {
  try {
    const res: AuthorizeUserType = yield call(authApi.login, payload);
    yield put(loginFulfilled(res));
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

function* registerSaga({ payload }: SagaParams) {
  try {
    const res: AuthorizeUserType = yield call(authApi.register, payload);
    yield put(registerFulfilled(res));
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
