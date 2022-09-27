import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faEdit, faEye, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { selectUsersById } from './usersApiSlice';

const primaryColor = '#64c5b1';

const User = ({ userId }) => {

    const user = useSelector(state => selectUsersById(state, userId));

    const navigate = useNavigate();

    if (user) {
        const handleEdit = () => navigate(`/dashboard/users/${userId}`);

        const useRolesString = user.roles.toString().replaceAll(',', ', ');

        return (
            <tr key={userId}>
                <td>
                    <button type='button' className='mx-2'>
                        <FontAwesomeIcon icon={faEye} color={primaryColor} />
                    </button>
                    <button type='button' className='mx-2' onClick={handleEdit}>
                        <FontAwesomeIcon icon={faEdit} color={primaryColor} />
                    </button>
                </td>
                <td>{user.email}</td>
                <td>{useRolesString}</td>
                <td>{user.active ? <FontAwesomeIcon icon={faCheckCircle} /> : <FontAwesomeIcon icon={faCircleXmark} />}</td>
            </tr>
        )
    } else return null;
}

export default User;