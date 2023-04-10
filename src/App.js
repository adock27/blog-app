// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Blogs from './components/blog/Blogs'
import Blog from './components/blog/Blog';
import BlogForm from './components/blog/BlogForm';
import MainNavbar from './shared/MainNavbar';
import Login from './components/Login';

import { useSelector } from 'react-redux';
import { selectCurrentUser } from './auth/authSlice';
import ProtectedRoute from './components/ProtectedRoute';
import Dashboard from './components/Dashboard';
import { Link } from 'react-router-dom';
import BlogListAdmin from './components/dashboard/BlogListAdmin';

function App() {
  const user = useSelector(selectCurrentUser)
  return (
    <BrowserRouter>
      {user ? 'User Logged' : 'Not a session active'}
      <MainNavbar />
      <Routes>
        {/* {user && <>
          <Route path="/blogs/add" element={<BlogForm />} />
        </>} */}
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<Blog />} />
        <Route path="/login" element={<Login />} />

        <Route element={<ProtectedRoute user={user} />}>
          <Route path="/dashboard/*" element={<Dashboard />}>
            <Route path="" element={<p>Contenidos</p>} />
            <Route path="blogs" element={<BlogListAdmin/>} />
            <Route path="blogs/add" element={<BlogForm />} />
          </Route>
        </Route>





        <Route path="*" element={<Home />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
