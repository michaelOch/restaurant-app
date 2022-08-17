import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <section className='footer-section'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className=''>
                            <h4 className=''>RESTAURANT APP</h4>
                            <div className='d-flex justify-content-start align-items-center'>
                                <Link to='/' className=''>
                                    <FontAwesomeIcon icon={faTwitter} />
                                </Link>&nbsp; &nbsp;
                                <Link to='/' className=''>
                                    <FontAwesomeIcon icon={faFacebook} />
                                </Link>&nbsp; &nbsp;
                                <Link to='/' className=''>
                                    <FontAwesomeIcon icon={faInstagram} />
                                </Link>&nbsp; &nbsp;
                                <Link to='/' className=''>
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-2'>
                        <div className=''>
                            <p className=''>
                                <Link to='/'>About Us</Link>
                            </p>
                            <p className=''>
                                <Link to='/'>Jobs</Link>
                            </p>
                            <p className=''>
                                <Link to='/'>Branches</Link>
                            </p>
                        </div>
                    </div>
                    <div className='col-md-2'>
                        <div className=''>
                            <p className=''>
                                <Link to='/'>Products</Link>
                            </p>
                            <p className=''>
                                <Link to='/'>All Categories</Link>
                            </p>
                        </div>
                    </div>
                    <div className='col-md-2'>
                        <div className=''>
                            <p className=''>
                                <Link to='/'>Contact</Link>
                            </p>
                            <p className=''>
                                <Link to='/'>Order Process</Link>
                            </p>
                        </div>
                    </div>
                </div>
                <hr className='' />
                <div className='footer-bottom mt-5'>
                    <p className='text-center mb-0'>Copyright &copy; 2022</p>
                </div>
            </div>
        </section>
    )
}

export default Footer;