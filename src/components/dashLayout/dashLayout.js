import React from 'react';
import DashHeader from '../dashHeader/dashHeader';
import DashSidebar from '../dashSidebar/dashSidebar';
import './dashLayout.css';

function DashLayout({ children }) {
    return (
        <main>
            {/* Dashboard Header */}
            <DashHeader />
            {/* Dashboard Sidebar */}
            <DashSidebar />
            <section className='dash-body'>
                <div className='container'>
                    <div className='dash-content p-3'>
                        {children}
                    </div>
                </div>
            </section>
        </main>
    )
}

export default DashLayout;