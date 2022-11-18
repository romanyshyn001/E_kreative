import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { rootSaga } from "./saga/rootSaga";
import createSagaMiddleware from "@redux-saga/core";
import posts from "./slices/postSlices/posts";
import comment from "./slices/commentSlices/comments";
import authMe from "./slices/authMe";
import announcements from "./slices/announcementSlices/announcements";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

export const rootReducer = combineReducers({
  authorize: authMe,
});

export const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export type RootStateType = ReturnType<typeof store.getState>;

let sagaMiddleware = createSagaMiddleware();
// const middleware = [sagaMiddleware];

// переніс preloadedState з test utils
const preloadedState = {};
const store = configureStore({
  reducer: {
    posts,
    comment,
    authMe: persistedReducer,
    announcements,
  },
  preloadedState,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      thunk: false,
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).prepend(sagaMiddleware);
  },
});

sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store);
export default store;
