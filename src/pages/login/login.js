import React from 'react';
import Navbar from '../../components/navbar/navbar';
import pastries from '../../assets/images/pastries.jpg';
import './login.css';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/footer';

function Login() {
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
                                <h4 className=''>Sign In</h4>
                                <form>
                                    <div className="mb-3">
                                        <label for="email" className="form-label">Email address</label>
                                        <input type="email" name='email' className="form-control" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="password" className="form-label">Password</label>
                                        <input type="password" name='password' className="form-control" />
                                    </div>
                                    <div className="mb-3 form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <label className="form-check-label" for="exampleCheck1">Trust this device</label>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Log In</button>
                                    <p className='mt-3'>Don't have an account? <Link to='/register'>Sign Up</Link></p>
                                </form>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='h-100'>
                                <img src={pastries} alt='pastries' />
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

export default Login;