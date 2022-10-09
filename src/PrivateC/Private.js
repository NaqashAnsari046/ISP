import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const Private = () => {
    let auth = localStorage.getItem('admin');
    return auth ? <Outlet />:<Navigate to='/signadmin' />
   
}

export default Private
