// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Blogs from './components/blog/Blogs'
import Blog from './components/blog/Blog';
import MainNavbar from './shared/MainNavbar';
import Login from './components/Login';

import { useSelector } from 'react-redux';
import { selectCurrentUser } from './auth/authSlice';

function App() {
  const auth = useSelector(selectCurrentUser)
  return (
    <BrowserRouter>
      {auth ? 'User Logged' : 'Not a session active'} 
      <MainNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
