// import createSagaMiddleware from "@redux-saga/core";
// import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import authMe from "./slices/authMe";
// import { rootSaga } from "./saga/rootSaga";

// import {
//     persistStore,
//     persistReducer,
//     FLUSH,
//     REHYDRATE,
//     PAUSE,
//     PERSIST,
//     PURGE,
//     REGISTER,
//   } from "redux-persist";
//   import storage from "redux-persist/lib/storage";

// const rootReducer = combineReducers({
//   authMe,
// });
// const persistConfig = {
//   key: "root",
//   storage,
// };

// let sagaMiddleware = createSagaMiddleware();
// export const middleware = [sagaMiddleware];
// export const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const logger = {

// middleware: (getDefaultMiddleware) => {
//     return getDefaultMiddleware({
//       thunk: false,
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }).prepend(sagaMiddleware);
//   },
// }
// sagaMiddleware.run(rootSaga);
