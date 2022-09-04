import React from 'react';
import { Outlet } from 'react-router-dom';
import DashHeader from '../dashHeader/dashHeader';
import DashSidebar from '../dashSidebar/dashSidebar';
import './dashLayout.css';

function DashLayout() {
    return (
        <>
            {/* Dashboard Header */}
            <DashHeader />
            {/* Dashboard Sidebar */}
            <DashSidebar />
            <section className='dash-body'>
                <div className='container'>
                    <div className='dash-content p-3'>
                        <Outlet />
                    </div>
                </div>
            </section>
        </>
    )
}

export default DashLayout;