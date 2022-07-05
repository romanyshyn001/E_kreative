import { Route, Routes, Navigate } from 'react-router-dom';
import s from'./App.module.css';
import LoginForm from './components/Auth/LoginMain';
import LogOut from './components/Auth/Logout/LogOut';
import Register from './components/Auth/Registration';
import NavBar from './components/navBar/navigation';
import NewsMain from './pages/announcements/NewsMain';
import PostContainer from './pages/post/PostsMain';


function App() {
  return (
    <div className={s.main}>
      <div className={s.App_header}>
         <NavBar/>
      </div>
      <Routes>
         <Route path="/" element={<Navigate replace to="/article" />} />
         <Route path='/article' element={<PostContainer/>}/>      
         <Route path='/auth' element={<LoginForm/>}/>
         <Route path='/logout' element={<LogOut/>}/>
         <Route path='/register' element={<Register/>}/>
         <Route path='/announcements' element={<NewsMain/>}/>
      </Routes>
   </div>
  );
}

export default App;
