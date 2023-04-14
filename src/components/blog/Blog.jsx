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
      .then( ({data}) => {
        setBlogs(data);
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
          <h1 className='mb-3'>{blogs.title}</h1>
          <div className='text-secondary'>Published by :
            {blogs.createdAt}
          </div>
          <img className='img-fluid rounded-4 col-md-8 col-lg-6 mb-3' src={blogs.cover} height={250} alt="" />
          <br />
          {blogs.body}
          <br />
          <br />

          <h6>Comentarios</h6>
          {blogs.tags.map((tag, i) => <div key={i}>{tag}</div>)}
        </div>
      )}

    </div>
  )
}

export default Blog