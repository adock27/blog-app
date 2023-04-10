import React from 'react'
import { Navigate, Outlet } from 'react-router'
const ProtectedRoute = ({user , children, redirectTo}) => {
  
    if (!user) {
        return <Navigate to={redirectTo}/>
    }
  
    return children ? children : <Outlet/>
}

export default ProtectedRoute