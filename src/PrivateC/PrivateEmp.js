import React from 'react'
import { Outlet,Navigate } from "react-router-dom";

const PrivateEmp = () => {
    let auth = localStorage.getItem('admin');
    return auth?<Outlet />:<Navigate to='/' />
}

export default PrivateEmp
