import { takeEvery, put, call } from 'redux-saga/effects'
import { getMovieAPI } from '../../Service/ApiService'
import { moviesAll } from '../slices/films'

function* moviesAllSaga(){
    try {
        const movieInfo = yield call(getMovieAPI)        
        yield put(moviesAll(movieInfo.data.results))
    } catch(error) {
        console.log(error)
    }
}

function* movieAllSaga(){
    yield takeEvery('movies/moviesLoading', moviesAllSaga)
}
export default movieAllSaga


















// function* movieDetailsSaga({payload: id}) {
//     try{
//         const response = yield call(() => instance.get('films/'), id )
//         let data = response.data.results[id-1]
//         yield put(getMovieDetails(data))
//         yield put(getPersonByLink(data.characters))
//     } catch(error) {
//         console.log(error)
//     }
// }

// function* setPersonageSaga({payload: id}) {
//     try{
//         const response = yield call(arrayOfLinks, id)
//         yield put(getPersonages(response.map(i => i.data)))
//     } catch(error) {
//         console.log(error)
//     }
// }
//.......ERROR........//
// function* characterInfoSaga({payload: id}){
//     try{
//         const res = yield call(personageDetailAPI, id)
//         yield put(getCharacterDetails(res.data))
//     } catch(error){
//         console.log(error)
//     }
// }