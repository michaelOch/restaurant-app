import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
    return (
        <header className=''>
            <nav class="navbar navbar-expand-lg bg-white fixed-top">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="/">Restaurant App</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Restaurant App</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li class="nav-item">
                                    <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/shop">Shop</Link>
                                </li>
                            </ul>
                            <form class="d-flex" role="search">
                                <input class="form-control me-2" type="search" placeholder="Search product" aria-label="Search" />
                                <button class="btn btn-secondary" type="submit">Search</button>
                            </form>
                            <ul class="navbar-nav justify-content-end">
                                <li class="nav-item">
                                    <Link class="nav-link active" aria-current="page" to="/">
                                        <FontAwesomeIcon icon={faUser} />
                                    </Link>
                                </li>
                                <li class="nav-item position-relative">
                                    <Link class="nav-link" to="/">
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