import React from 'react'
import { Link, Outlet } from 'react-router-dom';
const Dashboard = () => {
    return (
        <div>




            <div className="row">
                <div className="col-md-3 col-lg-2">
                    <div className='d-flex flex-nowrap'>
                        <div className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary">
                            <div className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">

                                <span className="fs-4">Dashboard</span>
                            </div>

                            <ul className="nav nav-pills flex-column mb-auto">
                                {/* <li className="nav-item">
                                    <a className="nav-link active" aria-current="page">
                                        Home
                                    </a>
                                </li> */}
                                <li>

                                    <Link className="nav-link link-body-emphasis" to="blogs">Blogs</Link>

                                </li>

                                <li>
                                    <Link className="nav-link link-body-emphasis" to="users">Users</Link>

                                </li>
                                <li>
                                    <Link className="nav-link link-body-emphasis" to="blogs">Blogs</Link>

                                </li>
                            </ul>

                        </div>

                    </div>
                </div>
                <div className="col">
                    <div className="p-4">
                        <Outlet />
                    </div>
                </div>
            </div>





        </div>
    )
}

export default Dashboard