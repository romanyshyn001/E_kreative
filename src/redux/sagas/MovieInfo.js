import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { getMovieAPI, arrayOfLinks } from "../../Service/ApiService";
import { getPersonagesInfo, setMovieDetails} from "../slices/movieDetailsInfo";

function* movieInfoSaga({payload: id}){
    try{
        const res = yield call(getMovieAPI, id)
        let data = res.data.results[id-1]
        yield put(setMovieDetails(data))      
    } catch (error) {
        console.log(error)
    }
}
function* setPersonageSaga({payload: id}) {
    try{
        const response = yield call(arrayOfLinks, id)
        yield put(getPersonagesInfo(response.map(i => i.data)))   
    } catch(error) {
        console.log(error)
    }
}

function* movieInfoWatcher() {
    yield takeLatest('movieDetails/movieDetailsLoading', movieInfoSaga)
    yield takeEvery('movieDetails/personagesInfoLoading', setPersonageSaga)
}
export default movieInfoWatcher