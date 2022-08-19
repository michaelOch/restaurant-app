import React from 'react';
import Navbar from '../../components/navbar/navbar';
import breakfast from '../../assets/images/breakfast.jpg';
import snacks from '../../assets/images/snacks.jpg';
import beverages from '../../assets/images/beverages.jpg';
import bread from '../../assets/images/bread.jpg';
import breadRoll from '../../assets/images/bread-roll.jpg';
import lunch from '../../assets/images/lunch.jpg';
import deserts from '../../assets/images/deserts.jpg';
import pastries from '../../assets/images/pastries.jpg';
import cake from '../../assets/images/cake.png';
import './shop.css';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/footer';

function Shop() {
    return (
        <main>
            {/* Navbar */}
            <Navbar />
            {/* Shop Section */}
            <section className='shop-section'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-6 mt-3'>
                            <div className='category-container position-relative' style={{ backgroundImage: `url(${breakfast})` }}>
                                <Link to='/' className='category-title'>
                                    <div className='text-center'>BREAKFAST</div>
                                </Link>
                            </div>
                        </div>
                        <div className='col-md-6 mt-3'>
                            <div className='category-container position-relative' style={{ backgroundImage: `url(${snacks})` }}>
                                <Link to='/' className='category-title'>
                                    <div className='text-center'>Snacks</div>
                                </Link>
                            </div>
                        </div>
                        <div className='col-md-6 mt-3'>
                            <div className='category-container position-relative' style={{ backgroundImage: `url(${lunch})` }}>
                                <Link to='/' className='category-title'>
                                    <div className='text-center'>Lunch table</div>
                                </Link>
                            </div>
                        </div>
                        <div className='col-md-6 mt-3'>
                            <div className='category-container position-relative' style={{ backgroundImage: `url(${deserts})` }}>
                                <Link to='/' className='category-title'>
                                    <div className='text-center'>Fresh salads and deserts</div>
                                </Link>
                            </div>
                        </div>
                        <div className='col-md-6 mt-3'>
                            <div className='category-container position-relative' style={{ backgroundImage: `url(${pastries})` }}>
                                <Link to='/' className='category-title'>
                                    <div className='text-center'>Cakes, tarts and pastries</div>
                                </Link>
                            </div>
                        </div>
                        <div className='col-md-6 mt-3'>
                            <div className='category-container position-relative' style={{ backgroundImage: `url(${breadRoll})` }}>
                                <Link to='/' className='category-title'>
                                    <div className='text-center'>Bread roll</div>
                                </Link>
                            </div>
                        </div>
                        <div className='col-md-6 mt-3'>
                            <div className='category-container position-relative' style={{ backgroundImage: `url(${beverages})` }}>
                                <Link to='/' className='category-title'>
                                    <div className='text-center'>Beverages</div>
                                </Link>
                            </div>
                        </div>
                        <div className='col-md-6 mt-3'>
                            <div className='category-container position-relative' style={{ backgroundImage: `url(${bread})` }}>
                                <Link to='/' className='category-title'>
                                    <div className='text-center'>Breads</div>
                                </Link>
                            </div>
                        </div>
                        <div className='col-md-6 mt-3'>
                            <div className='category-container position-relative' style={{ backgroundImage: `url(${cake})` }}>
                                <Link to='/' className='category-title'>
                                    <div className='text-center'>Cake</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Footer */}
            <Footer />
        </main>
    )
}

export default Shop;