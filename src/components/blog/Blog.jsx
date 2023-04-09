import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'


import BlogRepository from './ApiBlog';

const blogRepo = new BlogRepository();

const Blog = () => {
  const { id } = useParams();


  const [blogs, setBlogs] = useState({
    data: [],
    loading: true
  });

  useEffect(() => {
    blogRepo.getBlogbyId(id)
      .then(data => {
        setBlogs(data.data.data);
        console.log(data);
      })
      .catch(error => {
        console.error(error.message);
      });
  }, [id]);


  return (
    <div className='container'>

      {(blogs.loading) ? (
        <div>cargando</div>
      ) : (
        <div>
          <img className='img-fluid rounded-4 col-md-8 col-lg-6' src={blogs.cover} height={250} alt="" />
          <h6>{blogs.title}</h6>
          {blogs.body}
          <br />
          {blogs.createdAt}
          <br />
          
          <h6>Comentarios</h6>
          {blogs.tags.map((tag, i) => <div key={i}>{tag}</div>)}
        </div>
      )}

    </div>
  )
}

export default Blog