import React from 'react';
import Navbar from '../../components/navbar/navbar';
import breakfast from '../../assets/images/breakfast.jpg';
import './register.css';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/footer';

function Register() {
    return (
        <main>
            {/* Navbar */}
            <Navbar />
            {/* Register Section */}
            <section className='register-section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className='h-100'>
                                <img src={breakfast} alt='breakfast' />
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='h-100'>
                                <h4 className=''>SIGN UP</h4>
                                <form>
                                    <div className="mb-3">
                                        <label for="email" className="form-label">Email address</label>
                                        <input type="email" name='email' className="form-control" />
                                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                    </div>
                                    <div className="mb-3">
                                        <label for="password" className="form-label">Password</label>
                                        <input type="password" name='password' className="form-control" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="confirmPassword" className="form-label">Confirm Password</label>
                                        <input type="password" name='confirmPassword' className="form-control" />
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                    <p className='mt-3'>Already have an account? <Link to='/login'>Sign In</Link></p>
                                </form>
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

export default Register