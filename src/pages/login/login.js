import React, { useRef, useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from '../../components/navbar/navbar';
import pastries from '../../assets/images/pastries.jpg';
import './login.css';
import Footer from '../../components/footer/footer';

import { useDispatch } from 'react-redux';
import { setCredentials } from '../../auth/authSlice';
import { useLoginMutation } from '../../auth/authApiSlice';

import usePersist from '../../hooks/usePersist';

function Login() {

    const userRef = useRef();
    const errRef = useRef();
    const initialState = {
        email: '',
        password: '',
    };
    const [data, setData] = useState(initialState);
    const [errMsg, setErrMsg] = useState('');
    const [persist, setPersist] = usePersist();

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [login, { isLoading }] = useLoginMutation();

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        setErrMsg('');
    }, [data.email, data.password]);

    const handleChange = (e) => {
        e.preventDefault();

        setData({
            ...data,
            [e.target.name]: e.target.value,
        })
    }

    const handleToggle = () => setPersist(prev => !prev);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { accessToken } = await login({ email: data.email, password: data.password }).unwrap();
            dispatch(setCredentials({ accessToken }));
            setData({
                ...data,
                email: '',
                password: '',
            });
            setErrMsg('');
            navigate('/dashboard');
        } catch (err) {
            if (!err.status) {
                setErrMsg('No Server Response');
            } else if (err.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg(err.data?.message);
            }
            errMsg && errRef.current.focus();
        }
    }

    if (isLoading) return <p>Loading...</p>

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
                                { 
                                    errMsg && <p className='alert alert-danger' ref={errRef} aria-live='assertive'>{errMsg}</p> 
                                }
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email address</label>
                                        <input 
                                            type="email" 
                                            name='email' 
                                            className="form-control" 
                                            ref={userRef}
                                            onChange={handleChange}
                                            value={data?.email}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">Password</label>
                                        <input 
                                            type="password" 
                                            name='password' 
                                            className="form-control" 
                                            onChange={handleChange}
                                            value={data?.password}
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-primary">Log In</button>
                                    <div className="mb-3 form-check">
                                        <input 
                                            type="checkbox" 
                                            className="form-check-input" 
                                            id="exampleCheck1" 
                                            onChange={handleToggle}
                                            checked={persist}
                                        />
                                        <label className="form-check-label" htmlFor="exampleCheck1">Trust this device</label>
                                    </div>
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