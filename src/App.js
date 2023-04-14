import * as React from "react";
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

import { Link } from 'react-router-dom';


const Dashboard = React.lazy(() => import('./components/Dashboard'));
const BlogListAdmin = React.lazy(() => import('./components/dashboard/BlogListAdmin'));

function App() {
  const user = useSelector(selectCurrentUser)




  return (
    <BrowserRouter>
      {user ? 'User Logged' : 'Not a session active'}
      <MainNavbar />
      <Routes>
       
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<Blog />} />
        <Route path="/login" element={<Login />} />

        <Route element={<ProtectedRoute user={user} />}>
          <Route path="/dashboard/*" element={
            <React.Suspense fallback={<>...</>}>
              <Dashboard />
            </React.Suspense>
          }>
            <Route path="" element={<p>Contenidos</p>} />
            <Route path="blogs" element={
              <React.Suspense fallback={<>...</>}>
                <BlogListAdmin />
              </React.Suspense>
            } />
            <Route path="blogs/add" element={<BlogForm />} />
          </Route>
        </Route>





        <Route path="*" element={<Home />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
