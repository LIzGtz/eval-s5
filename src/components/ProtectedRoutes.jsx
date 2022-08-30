import React from 'react'

const ProtectedRoutes = () => {

if(false) {
    return <Outlet />
} else {
    return <Navigate to='/' />
}   
  
}

export default ProtectedRoutes