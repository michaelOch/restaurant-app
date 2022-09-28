import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './user.css';

import { useGetUsersQuery } from './usersApiSlice';
import User from './User';

const primaryColor = '#64c5b1';

function Index() {

    const {
        data: users,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetUsersQuery(undefined, {
        pollingInterval: 60000,
        refetchOnFocus: true,
        refetchOnMountOrArgChange: true
    });

    let content;

    if (isLoading) content = <tr><td>Loading...</td></tr>;

    if (isError) {
        content = <tr className='text-danger'><td>{error?.data?.message}</td></tr>;
    }

    if (isSuccess) {

        const { ids } = users;

        const tableContent = ids?.length
            ? ids.map(userId => (<User key={userId} userId={userId} />))
            : null
        
        content = tableContent;
    }

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
                <table className="table table-borderless mt-3">
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Name</th>
                            <th scope="col">Role</th>
                            <th scope="col">Active</th>
                        </tr>
                    </thead>
                    <tbody>
                        {content}
                    </tbody>
                </table>
            </section>
        </main>
    )
}

export default Index;