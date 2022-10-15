import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
    return (
        <header className=''>
            <nav className="navbar navbar-expand-lg bg-white fixed-top">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Restaurant App</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Restaurant App</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/shop">Shop</Link>
                                </li>
                            </ul>
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search product" aria-label="Search" />
                                <button className="btn btn-secondary" type="submit">Search</button>
                            </form>
                            <ul className="navbar-nav justify-content-end">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">
                                        <FontAwesomeIcon icon={faUser} />
                                    </Link>
                                </li>
                                <li className="nav-item position-relative">
                                    <Link className="nav-link" to="/">
                                        <FontAwesomeIcon icon={faShoppingBasket} />
                                    </Link>
                                    <span className='cart-count'>0</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;