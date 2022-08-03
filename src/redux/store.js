import { configureStore } from "@reduxjs/toolkit";
import { rootSaga } from "./saga/rootSaga";
import createSagaMiddleware from '@redux-saga/core'

import posts from "./slices/posts";
import comment from "./slices/comments";
import authMe from "./slices/authMe";
import announcements from "./slices/announcements"

let sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]

export default configureStore({
    reducer: {
        posts,
        comment,
        authMe,
        announcements
    },
    middleware: getDefaultMiddleware => {
        return getDefaultMiddleware({ thunk: false }).prepend(sagaMiddleware)
    }
})

sagaMiddleware.run(rootSaga)