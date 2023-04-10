import React from 'react'
import { Link, Outlet } from 'react-router-dom';

import Table from 'react-bootstrap/Table';


const BlogListAdmin = () => {
    return (
        <div>
            <h5 className='mb-3'>Blogs</h5>
            <Link className="btn btn-success mb-3" to="add">Add new blog</Link>
            <h6>List</h6>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td colSpan={2}>Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default BlogListAdmin