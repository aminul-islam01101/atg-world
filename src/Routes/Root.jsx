import React from 'react';
import { Outlet } from 'react-router-dom';

import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Root = () => (
    <div>
        <div className='container-sm'><Navbar /></div>
        <Outlet />
        <Footer />
    </div>
);

export default Root;
