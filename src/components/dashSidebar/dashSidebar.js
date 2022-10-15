import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { faHome, faList, faListAlt, faCartShopping, faBasketShopping, faBook, faUsers, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import './dashSidebar.css';

import { useSendLogoutMutation } from '../../auth/authApiSlice';

const primaryColor = '#64c5b1';

function DashSidebar() {

    const navigate = useNavigate();
    const { pathname } = useLocation();

    const [sendLogout, {
        isLoading,
        isSuccess,
        isError,
        error
    }] = useSendLogoutMutation();

    useEffect(() => {
        if (isSuccess) navigate('/login');
    }, [isSuccess, navigate]);

    const onLogoutClicked = () => sendLogout();

    if(isLoading) return <p>Logging out...</p>

    if (isError) return <p>Error: {error.message}</p>

    const logoutButton = (
        <button
            className='btn btn-primary'
            title='Logout'
            onClick={onLogoutClicked}
        >
            <FontAwesomeIcon icon={faRightFromBracket} /> &nbsp; Logout
        </button>
    )

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
                            <li className='nav-item mb-4'>
                                <Link to='/dashboard/users' className=''>
                                    <FontAwesomeIcon icon={faUsers} color={primaryColor} /> Users
                                </Link>
                            </li>
                            <li className='nav-item mb-4'>
                                {logoutButton}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DashSidebar;