import { call, put, takeEvery } from "redux-saga/effects";
import { api } from "../../service/api";
import { loginFulfilled, logoutFulfilled, registerFulfilled } from "../slices/authMe";

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

function* logintWatcher() {
    yield takeEvery('authMe/loginLoading', loginSaga)
    yield takeEvery('authMe/logoutLoading', logoutSaga)
    yield takeEvery('authMe/registerLoading', registerSaga)

}
export default logintWatcher
