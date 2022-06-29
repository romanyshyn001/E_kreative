import { call, put, takeEvery } from "redux-saga/effects";
import { api } from "../../service/api";
import { loginFulfilled, logoutFulfilled } from "../slices/login";

function* loginSaga({payload}){
    try{
        const res = yield call(api.loginAPI , payload.email, payload.password, payload.rememberMe)       
        localStorage.setItem('token', JSON.stringify(res[0]))      
        localStorage.setItem('user', JSON.stringify(res[1]))      
        yield put(loginFulfilled(res))         
    } catch (error) {
        console.log('Wrong password or mail => ', error)
    }
}

function* logoutSaga(){
    try{
        localStorage.clear()
        yield put(logoutFulfilled()) 
    } catch (error) {
        console.log('Something went wrong! Try later => ', error)
    }
}

function* logintWatcher() {
    yield takeEvery('login/loginLoading', loginSaga)
    yield takeEvery('login/logoutLoading', logoutSaga)
}
export default logintWatcher

// const options = {
        //     email: payload.email,
        //     password: payload.password,
        //     check: payload.rememberMe
        // }