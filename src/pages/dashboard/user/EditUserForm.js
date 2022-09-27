import React, { useState, useEffect } from 'react';
import { useUpdateUserMutation, useDeleteUserMutation } from './usersApiSlice';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { ROLES } from '../../../config/roles';

const EditUserForm = ({ user }) => {

    const [updateUser, {
        isLoading,
        isSuccess,
        isError,
        error
    }] = useUpdateUserMutation();

    const [deleteUser, {
        isSuccess: isDelSuccess,
        isError: isDelError,
        error: delerror
    }] = useDeleteUserMutation();

    const navigate = useNavigate();

    const initialState = {
        email: user?.email,
        password: '',
        confirmPassword: '',
        roles: user?.roles,
        active: user.active,
    }

    const [data, setData] = useState(initialState);

    useEffect(() => {
        if (isSuccess || isDelSuccess) {
            setData({
                email: '',
                password: '',
                confirmPassword: '',
                roles: [],
            });

            navigate('/dashboard/users');
        }

    }, [isSuccess, isDelSuccess, navigate]);

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
        } else if (e.target.name === 'active') {
            setData({
                ...data,
                [e.target.name]: e.target.checked
            })
        } else {
            setData({
                ...data,
                [e.target.name]: e.target.value,
            });
        }
    }

    const handleOnSave = async (e) => {
        await updateUser({ id: user.id, email: data.email, roles: data.roles, active: data.active })
    }

    const handleOnDelete = async (e) => {
        await deleteUser({ id: user.id })
    }

    const options = Object.values(ROLES).map(role => {
        return (
            <option
                key={role}
                value={role}
            >{role}</option>
        )
    })

    const canSave = data?.roles?.length && data?.email !== '' && !isLoading;

    const errContent = (error?.data?.message || delerror?.data?.message) ?? '';

    return (
        <>
            <p className='text-danger'>{errContent}</p>
            <form onSubmit={e => e.preventDefault()}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input 
                        type="email" 
                        name='email' 
                        className="form-control" 
                        value={data?.email}
                        onChange={handleOnChange}
                        disabled={true}
                    />
                </div>
                {/* <div className="mb-3">
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
                </div> */}
                <div className="mb-3">
                    <label htmlFor="active" className="form-label">
                        Active
                        <input 
                            type="checkbox" 
                            name='active' 
                            className="form-checkbox" 
                            checked={data?.active}
                            onChange={handleOnChange}
                        />
                    </label>
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
                    type="button" 
                    className="btn btn-primary" 
                    title='Save' 
                    onClick={handleOnSave}
                    disabled={!canSave}
                >
                    <FontAwesomeIcon icon={faSave} />
                </button>
                <button 
                    type="button" 
                    className="btn btn-secondary" 
                    title='Delete' 
                    onClick={handleOnDelete}
                >
                    <FontAwesomeIcon icon={faTrashCan} />
                </button>
            </form>
        </>
    )
}

export default EditUserForm;