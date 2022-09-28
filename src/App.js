import React from "react";
import store, { persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider, useDispatch } from "react-redux";

import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import s from "./App.module.css";
import LoginMain from "./components/Auth/Login/LoginMain";
import LogOutMain from "./components/Auth/Logout/LogOutMain";
import Registration from "./components/Auth/Register/Registration";

import NavigationMain from "./components/NavBar/NavigationMain";
import AnnouncementsMain from "./pages/Announcements/AnnouncementsMain";
import PostMain from "./pages/Post/PostsMain";
import ProfileMain from "./pages/Profile/ProfileMain";

const App = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className={s.App_header}>
        <NavigationMain />
      </div>
      <Routes>
        <Route path="/" element={<Navigate replace to="/posts" />} />
        <Route path="/announcements" element={<AnnouncementsMain />} />
        <Route path="/profile" element={<ProfileMain />} />

        <Route path="/auth" element={<LoginMain />} />
        <Route path="/logout" element={<LogOutMain />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/posts" element={<PostMain />} />
      </Routes>
    </div>
  );
};

const MainApp = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <App />
          </PersistGate>
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  );
};
store.window = store;
export default MainApp;
