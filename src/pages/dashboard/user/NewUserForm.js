import React, { useState, useEffect } from 'react';
import { useAddNewUserMutation } from './usersApiSlice';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import { ROLES } from '../../../config/roles';

const NewUserForm = () => {

    const [addNewUser, {
        isLoading,
        isSuccess,
        isError,
        error
    }] = useAddNewUserMutation();

    const navigate = useNavigate();

    const initialState = {
        email: '',
        password: '',
        confirmPassword: '',
        roles: ['user'],
    }

    const [data, setData] = useState(initialState);

    useEffect(() => {
        if (isSuccess) {
            setData({
                email: '',
                password: '',
                confirmPassword: '',
                roles: [],
            });

            navigate('/dashboard/users');
        }
    }, [isSuccess, navigate]);

    const handleOnChange = e => {
        if (e.target.name === 'roles') {
            const values = Array.from(
                e.target.selectedOptions,   //HTMLCollection
                (option) => option.value
            );
            setData({
                ...data,
                [e.target.name]: values
            })
        } else {
            setData({
                ...data,
                [e.target.name]: e.target.value,
            });
        }
    }

    const canSave = data?.roles?.length && data?.email !== '' && data?.password !== '' && data?.password === data?.confirmPassword && !isLoading;

    const handleOnSave = async (e) => {
        e.preventDefault();

        if (canSave) {
            await addNewUser({ email: data.email, password: data.password, roles: data.roles })
        }
    }

    const options = Object.values(ROLES).map(role => {
        return (
            <option
                key={role}
                value={role}
            >{role}</option>
        )
    })

    return (
        <>
            <p className='text-danger'>{error?.data?.message}</p>
            <form onSubmit={handleOnSave}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input 
                        type="email" 
                        name='email' 
                        className="form-control" 
                        value={data?.email}
                        onChange={handleOnChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input 
                        type="password" 
                        name='password' 
                        className="form-control" 
                        value={data?.password}
                        onChange={handleOnChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                    <input 
                        type="password" 
                        name='confirmPassword' 
                        className="form-control" 
                        value={data?.confirmPassword}
                        onChange={handleOnChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="roles" className="form-label">Assigned Roles</label>
                    <select 
                        name='roles'
                        className='form-select'
                        multiple={true}
                        size="3"
                        value={data?.roles}
                        onChange={handleOnChange}
                    >
                        {options}
                    </select>
                </div>
                <button 
                    type="submit" 
                    className="btn btn-primary" 
                    title='Save' 
                    disabled={!canSave}
                >
                    <FontAwesomeIcon icon={faSave} />
                </button>
            </form>
        </>
    )
}

export default NewUserForm;