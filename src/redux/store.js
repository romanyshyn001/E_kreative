import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from '@redux-saga/core'

import moviesList from './slices/films'
import movieDetailsInfo from './slices/movieDetailsInfo'
import characterInfo from './slices/characterInfo'
import rootSaga from './slices/rootSaga'


let sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]

export default configureStore({
  reducer: {
    movies: moviesList,
    movieDetails: movieDetailsInfo,
    personage: characterInfo
  },
  
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware({ thunk: false }).prepend(sagaMiddleware)
}
})

sagaMiddleware.run(rootSaga)