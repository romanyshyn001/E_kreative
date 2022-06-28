<<<<<<< HEAD
import { configureStore } from "@reduxjs/toolkit";
import posts from "./slices/article";
=======
import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from '@redux-saga/core'

import moviesList from './slices/films'
import movieDetailsInfo from './slices/movieDetailsInfo'
import characterInfo from './slices/characterInfo'
import rootSaga from './slices/rootSaga'
>>>>>>> 3d7d3b84a8b261690f1209447a459f980bff15b3

import { rootSaga } from "./saga/rootSaga";
import createSagaMiddleware from '@redux-saga/core'
import comments from "./slices/comments";
import login from "./slices/login";

let sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]

export default configureStore({
<<<<<<< HEAD
    reducer: {
        posts,
        comment: comments,
        login: login
    },
    middleware: getDefaultMiddleware => {
        return getDefaultMiddleware({ thunk: false }).prepend(sagaMiddleware)
    }
})
=======
  reducer: {
    movies: moviesList,
    movieDetails: movieDetailsInfo,
    personage: characterInfo
  },
  
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware({ thunk: false }).prepend(sagaMiddleware)
}
})

>>>>>>> 3d7d3b84a8b261690f1209447a459f980bff15b3
sagaMiddleware.run(rootSaga)