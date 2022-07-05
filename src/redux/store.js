import { configureStore } from "@reduxjs/toolkit";
import { rootSaga } from "./saga/rootSaga";
import createSagaMiddleware from '@redux-saga/core'

import posts from "./slices/article";
import comments from "./slices/comments";
import login from "./slices/login";
import register from "./slices/register";
import announcements from "./slices/announcements"

let sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]

export default configureStore({
    reducer: {
        posts,
        comment: comments,
        login, 
        register,
        announcements
    },
    middleware: getDefaultMiddleware => {
        return getDefaultMiddleware({ thunk: false }).prepend(sagaMiddleware)
    }
})

sagaMiddleware.run(rootSaga)