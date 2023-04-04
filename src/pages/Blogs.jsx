import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import axios from 'axios';

import BlogRepository from '../blog/ApiBlog';

const blogRepo = new BlogRepository();

const Blogs = () => {

  const [blogs, setBlogs] = useState({
    data: [],
    loading: true
  });

  useEffect(() => {
    blogRepo.getBlogs()
      .then(data => {
        setBlogs(data.data.data);
      })
      .catch(error => {
        console.error(error.message);
      });
  }, []);


  return (
    <div>
      <h3>List of Blogs</h3>
      <table>
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