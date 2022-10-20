import React, { Suspense } from "react";
import store, { persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import s from "./App.module.css";
import LogOutMain from "./components/Auth/Logout/LogOutMain";
import NavigationMain from "./components/NavBar/NavigationMain";
import ProfileMain from "./pages/Profile/ProfileMain";
import PreLoader from "./components/Loader/PreLoader";
const LoginMain = React.lazy(() => import("./components/Auth/Login/LoginMain"));
const Registration = React.lazy(() =>
  import("./components/Auth/Register/Registration")
);
const AnnouncementsMain = React.lazy(() =>
  import("./pages/Announcements/AnnouncementsMain")
);
const PostMain = React.lazy(() => import("./pages/Post/PostsMain"));

const App = () => {
  return (
    <div>
      <div className={s.App_header}>
        <NavigationMain />
      </div>
      <div className={s.bodyMain}>
        <Suspense fallback={<PreLoader />}>
          <Routes>
            <React.Fragment>
              <Route path="/" element={<Navigate replace to="/posts" />} />
              <Route path="/announcements" element={<AnnouncementsMain />} />
              <Route path="/profile" element={<ProfileMain />} />
              <Route path="/auth" element={<LoginMain />} />
              <Route path="/logout" element={<LogOutMain />} />
              <Route path="/register" element={<Registration />} />
              <Route path="/posts" element={<PostMain />} />
            </React.Fragment>
          </Routes>
        </Suspense>
      </div>
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
export default MainApp;
window.store = store;
