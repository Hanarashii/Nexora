import React from 'react';
import Navbar from '../components/navbar.tsx'
import { Outlet } from 'react-router-dom';

const CustomerLayout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

export default CustomerLayout;