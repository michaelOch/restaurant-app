import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import carousel1 from '../../assets/images/carousel-1.jpg';
import carousel2 from '../../assets/images/carousel-2.jpg';
import carousel3 from '../../assets/images/carousel-3.jpg';
import product1 from '../../assets/images/product-1.jpg';
import product2 from '../../assets/images/product-2.jpg';
import product3 from '../../assets/images/product-3.jpg';

function Index() {
    return (
        <main>
            {/* Header Section */}
            <section className='header-section'>
                <div className=''>
                    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={carousel1} className="d-block w-100" alt="carousel 1" />
                            </div>
                            <div className="carousel-item">
                                <img src={carousel2} className="d-block w-100" alt="carousel 2" />
                            </div>
                            <div className="carousel-item">
                                <img src={carousel3} className="d-block w-100" alt="carousel 3" />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </section>
            {/* About Section */}
            <section className='about-section'>
                <div className='container'>
                    <div className='p-5 about-content'>
                        <h1 className='text-center'>Handmade in Geesthacht</h1>
                        <p className='text-center'>
                            We don't just bake bread and rolls. We bake with passion - and for the love of traditional craftsmanship. It tastes good all over Geesthacht!
                        </p>
                        <p className='text-center'>
                            <Link to='/about' className='btn btn-lg btn-secondary'>MORE ABOUT US</Link>
                        </p>
                    </div>
                </div>
            </section>
            {/* Category Section */}
            <section className='category-section'>
                <div className='container'>
                    <div className=''>
                        <div className='row'>
                            <div className='col-md-6 mt-3'>
                                <div className='p-5 pastry-section d-flex flex-column justify-content-center align-items-center'>
                                    <h3 className='text-center'>CANDY</h3>
                                    <p className='text-center'>
                                        <Link to='/' className='btn btn-lg btn-primary'>CAKES AND PASTRIES</Link>
                                    </p>
                                </div>
                            </div>
                            <div className='col-md-6 mt-3'>
                                <div className='p-5 bake-section d-flex flex-column justify-content-center align-items-center'>
                                    <h3 className='text-center'>BECOME ONE OF US</h3>
                                    <p className='text-center'>
                                        <Link to='/' className='btn btn-lg btn-primary'>APPLY HERE</Link>
                                    </p>
                                </div>
                            </div>
                            <div className='col-md-12 mt-3'>
                                <div className='p-5 cake-section d-flex flex-column justify-content-center align-items-center'>
                                    {/* <h3 className='text-center'>CANDY</h3> */}
                                    <p className='text-center'>
                                        <Link to='/' className='btn btn-lg btn-primary'>TO THE ACTION</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Branch Section */}
            <section className='branch-section'>
                <div className='container'>
                    <div className='p-5'>
                        <h2 className='text-center'>HERE YOU WILL FIND A BRANCH NEAR YOU</h2>
                        <p className='text-center mt-4'>
                            <Link to='/' className='btn btn-lg btn-secondary'>FIND BRANCH</Link>
                        </p>
                    </div>
                </div>
            </section>
            {/* History Section */}
            <section className='history-section'>
                <div className='container'>
                    <div className='history-content d-flex justify-content-center align-items-center'>
                        <p className='text-center'>
                            <Link to='/' className='btn btn-lg btn-secondary'>HISTORY</Link>
                        </p>
                    </div>
                </div>
            </section>
            {/* Product Section */}
            <section className='product-section'>
                <div className='container'>
                    <div className=''>
                        <h2 className='text-center'>OUR PRODUCTS</h2>
                        <div className='row mt-5'>
                            <div className='col-md-4 mt-3'>
                                <div className=''>
                                    <div className='product-avatar'>
                                        <img src={product1} alt='product 1' />
                                    </div>
                                    <h6 className='text-center mb-0 mt-2 product-name'>Pizza Hawaii</h6>
                                    <p className='text-center mb-0 product-amount'>$ 7.50</p>
                                    <p className='text-center'>
                                        <Link to='/' className='btn btn-primary'>TO THE PRODUCT</Link>
                                    </p>
                                </div>
                            </div>
                            <div className='col-md-4 mt-3'>
                                <div className=''>
                                    <div className='product-avatar'>
                                        <img src={product2} alt='product 1' />
                                    </div>
                                    <h6 className='text-center mb-0 mt-2 product-name'>Pizza Broccoli</h6>
                                    <p className='text-center mb-0 product-amount'>$ 7.50</p>
                                    <p className='text-center'>
                                        <Link to='/' className='btn btn-primary'>TO THE PRODUCT</Link>
                                    </p>
                                </div>
                            </div>
                            <div className='col-md-4 mt-3'>
                                <div className=''>
                                    <div className='product-avatar'>
                                        <img src={product3} alt='product 1' />
                                    </div>
                                    <h6 className='text-center mb-0 mt-2 product-name'>Pizza pepperoni salami</h6>
                                    <p className='text-center mb-0 product-amount'>$ 7.50</p>
                                    <p className='text-center'>
                                        <Link to='/' className='btn btn-primary'>TO THE PRODUCT</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Footer Section */}
            <Footer />
        </main>
    )
}

export default Index;