import React from 'react'

import { Link, NavLink } from 'react-router-dom'

import { useDispatch } from 'react-redux'


import { useSelector } from 'react-redux';
import { logOut, selectCurrentUser } from '../auth/authSlice';


export const MainNavbar = () => {
  const auth = useSelector(selectCurrentUser)

  const dispatch = useDispatch();

  const handleDispatch = () => {
    console.log('ander');
    dispatch(logOut())
  }

  return (


    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to={'/'} >Home</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link " to={'/blogs'} >Blogs</NavLink>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link " to={'/login'} >Login</NavLink>
              </li>
            </ul>
            {
              auth &&
              <ul className="navbar-nav">
                <li className="nav-item">
                  <button onClick={handleDispatch}> LogOut</button>
                </li>
              </ul>
            }

          </div>
        </div>
      </nav>
    </>
  )
}


export default MainNavbar