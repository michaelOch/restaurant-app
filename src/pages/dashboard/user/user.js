import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faEdit, faEye, faTrash } from '@fortawesome/free-solid-svg-icons';
import './user.css';

const primaryColor = '#64c5b1';

function User() {
    return (
        <main>
            <section className=''>
                <h6 className='mb-3'>Users</h6>
                <div className='d-flex justify-content-between align-items-center'>
                    <div className="input-group search-section">
                        <span className="input-group-text">
                            <FontAwesomeIcon icon={faSearch} color={primaryColor} />
                        </span>
                        <input type="text" className="form-control" placeholder="Search here..." />
                    </div>
                    <button type='button' className='btn btn-primary'>Add New</button>
                </div>
                <table class="table table-borderless mt-3">
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Name</th>
                            <th scope="col">Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <button type='button' className='mx-2'><FontAwesomeIcon icon={faEye} color={primaryColor} /></button>
                                <button type='button' className='mx-2'><FontAwesomeIcon icon={faEdit} color={primaryColor} /></button>
                                <button type='button' className='mx-2'><FontAwesomeIcon icon={faTrash} color={primaryColor} /></button>
                            </td>
                            <td>Mark</td>
                            <td>User</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </main>
    )
}

export default User;