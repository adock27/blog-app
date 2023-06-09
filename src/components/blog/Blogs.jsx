import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../auth/authSlice';

import BlogRepository from './ApiBlog';

const blogRepo = new BlogRepository();

const Blogs = () => {

  const [blogs, setBlogs] = useState({
    data: [],
    loading: true
  });

  useEffect(() => {
    blogRepo.getBlogs()
      .then(data => {
        setBlogs(data);
      })
      .catch(error => {
        console.error(error.message);
      });
  }, []);


  const auth = useSelector(selectCurrentUser)


  return (
    <div className='container'>
      
      <h3 className='h6'>List of Blogs</h3>
      <table className='table'>
        <tbody>
          {(blogs.loading) ? (
            <tr><td>cargando...</td></tr>
          ) : (blogs.map((blog, key) => (
            <tr key={key}>
              <td>{blog.title}</td>
              <td>
                <Link to={`${blog._id}`}>ver</Link>
              </td>
            </tr>
          )))}

        </tbody>
      </table>
    </div>
  )
}

export default Blogs