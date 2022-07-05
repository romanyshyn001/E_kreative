import { configureStore } from "@reduxjs/toolkit";
import posts from "./slices/article";
import { rootSaga } from "./saga/rootSaga";
import createSagaMiddleware from '@redux-saga/core'
import comments from "./slices/comments";
import login from "./slices/login";
import register from "./slices/register";

let sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]

export default configureStore({
    reducer: {
        posts,
        comment: comments,
        login: login,
        register
    },
    middleware: getDefaultMiddleware => {
        return getDefaultMiddleware({ thunk: false }).prepend(sagaMiddleware)
    }
})

sagaMiddleware.run(rootSaga)