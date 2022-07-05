import { call, put, takeEvery } from "redux-saga/effects";
import { api } from "../../service/api";
import { registerFulfilled } from "../slices/register";

function* registerSaga({payload}){
    try{
        const res = yield call(api.register, payload.email, payload.password, payload.lastName, payload.firstName, payload.age, payload.avatar )       
        localStorage.setItem('token', JSON.stringify(res.data.accessToken))      
        localStorage.setItem('user', JSON.stringify(res.data.user))
        yield put(registerFulfilled(res.data.user))         
    } catch (error) {
        console.log('Wrong password or mail => ', error)
    }
}

function* registertWatcher() {
    yield takeEvery('register/registerLoading', registerSaga)
}
export default registertWatcher
