import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


//alert
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import BlogRepository from './ApiBlog';


const blogRepo = new BlogRepository();

const MySwal = withReactContent(Swal)

const BlogForm = () => {

  const [blog, setBlog] = useState({
    title: '',
    body: '',
    cover: '',
    author: "6423cf6316cba3673b50060c",
    tags: [],
    filepath: '',
  })


  //  obtiene los datos del formulario 
  const handleFileinput = (e) => {

    if (!e.target.files[0]) {
      return
    }



    const formData = new FormData();
    formData.append("name", 'file');
    formData.append("file", e.target.files[0]);


    blogRepo.addCover(formData).then(response => {

      const url = response.data.path;
      const filepath = response.data.filepath;
      const newBlog = { ...blog, cover: url, filepath: filepath }
      setBlog(newBlog)
      e.disabled = true
    })
      .catch(error => {
        console.error(error.message);
      });


  }

  //  obtiene los datos del formulario 
  const handleInputChange = (e) => {
    setBlog((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  // eliminar la imagen del file input del servidor 
  const removeCover = (e) => {
    e.preventDefault();
    // console.log(blog.filepath);
    blogRepo.removeCover(blog.filepath).then(response => {
      // console.log(response)
    }).catch(error => {
      console.error(error.message);
    });


    setBlog({ cover: '', filepath: '' })

    // hidden input file when a image is selected
    document.getElementsByName('cover')[0].value = '';


  }

  const onSubmitForm = (e) => {
    e.preventDefault();

    console.log(blog);

    blogRepo.addBlog(blog).then(response => {
      console.log(response)
    }).catch(error => {
      console.error(error.message);
    });
    
    MySwal.fire({
      title: <p>Hello World</p>,
    })

  }



  return (
    <div className='container' onSubmit={onSubmitForm}>
      <Form className='p-3'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control name='title' type="text" placeholder="Enter title" onChange={handleInputChange} required />
          <Form.Text className="text-muted">
            Type something
          </Form.Text>
        </Form.Group>

        {blog.cover &&
          <>
            <img src={blog.cover} className='img-fluid rounded-3 mb-3 d-block col-md-8 col-lg-7 col-xl-6' height={250} alt={blog.title} />
            <button name='deleteCover' onClick={removeCover} className='btn btn-sm btn-danger mb-3'> Remove cover </button>
          </>
        }

        <Form.Group controlId="formFile" className="mb-3" hidden={blog.cover && true}>
          <Form.Label>Cover</Form.Label>
          <Form.Control name="cover" type="file" onChange={handleFileinput} required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Body</Form.Label>
          <Form.Control name='body' as="textarea" rows={3} onChange={handleInputChange} required />
        </Form.Group>

        <Button variant="primary" type="submit">
          Share post
        </Button>
      </Form>
    </div>
  )
}

export default BlogForm