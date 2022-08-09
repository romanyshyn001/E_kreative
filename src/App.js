import { Route, Routes, Navigate } from "react-router-dom";
import s from "./App.module.css";
import LoginMain from "./components/Auth/Login/LoginMain";
import LogOutMain from "./components/Auth/Logout/LogOutMain";
import Registration from "./components/Auth/Register/Registration";

import NavigationMain from "./components/NavBar/NavigationMain";
import AnnouncementsMain from "./pages/Announcements/AnnouncementsMain";
import UpdateReply from "./pages/Comments/UpdateComment/UpdateReply";
import PostMain from "./pages/Post/PostsMain";
import UpdatePostMain from "./pages/Post/UpdatePost/UpdatePostMain";
import ProfileMain from "./pages/Profile/ProfileMain";

const App = () => {
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

        <Route path="/comment/edit/:id" element={<UpdateReply />} />

        <Route path="/posts" element={<PostMain />} />

        <Route path="posts/edit/:id" element={<UpdatePostMain />} />

      </Routes>
    </div>
  );
};

export default App;
