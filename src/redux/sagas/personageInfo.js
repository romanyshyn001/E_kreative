import { call, takeEvery, put } from "redux-saga/effects";
import {  arrayOfLinks, personageDetailAPI } from "../../Service/ApiService";
import { getCharacterInfo, getFilmsInfo } from "../slices/characterInfo";

function* personageInfoSaga({payload: id}){
   try{
      const res = yield call(personageDetailAPI, id)
      yield put(getCharacterInfo(res.data))
   } catch(error) {
      console.log(error)
   }
}
function* filmsInfoSaga({payload: id}){
   const res = yield call(arrayOfLinks, id)
   yield put(getFilmsInfo(res.map(i => i.data)))
}

function* personageInfoWatcher(){
   yield takeEvery('personageInfo/characterInfoLoading', personageInfoSaga)
   yield takeEvery('personageInfo/setFilmsInfoLoading', filmsInfoSaga)
}
export default personageInfoWatcher