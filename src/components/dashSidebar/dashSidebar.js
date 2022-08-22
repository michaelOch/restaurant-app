import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import { faHome, faList, faListAlt, faCartShopping, faBasketShopping, faBook } from '@fortawesome/free-solid-svg-icons';
import './dashSidebar.css';

const primaryColor = '#64c5b1';

function DashSidebar() {
    return (
        <section className='sidebar-section'>
            <div className='container-fluid'>
                <div className='sidebar-content'>
                    <div className='sidebar-header'>
                        <h3 className=''>Restaurant App</h3>
                    </div>
                    <hr className='' />
                    <div className='sidebar-body'>
                        <ul className='navbar-nav'>
                            <li className='nav-item mb-4'>
                                <Link to='/dashboard' className=''>
                                    <FontAwesomeIcon icon={faHome} color={primaryColor} /> Dashboard
                                </Link>
                            </li>
                            <li className='nav-item mb-4'>
                                <Link to='/dashboard/category' className=''>
                                    <FontAwesomeIcon icon={faList} color={primaryColor} /> Category
                                </Link>
                            </li>
                            <li className='nav-item mb-4'>
                                <Link to='/dashboard/subcategory' className=''>
                                    <FontAwesomeIcon icon={faListAlt} color={primaryColor} /> Sub-category
                                </Link>
                            </li>
                            <li className='nav-item mb-4'>
                                <Link to='/dashboard/product' className=''>
                                    <FontAwesomeIcon icon={faBasketShopping} color={primaryColor} /> Products
                                </Link>
                            </li>
                            <li className='nav-item mb-4'>
                                <Link to='/dashboard/orders' className=''>
                                    <FontAwesomeIcon icon={faCartShopping} color={primaryColor} /> Orders
                                </Link>
                            </li>
                            <li className='nav-item mb-4'>
                                <Link to='/dashboard/sales' className=''>
                                    <FontAwesomeIcon icon={faBook} color={primaryColor} /> Sales
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DashSidebar;