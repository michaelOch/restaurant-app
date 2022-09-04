import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faEdit, faEye, faTrash } from '@fortawesome/free-solid-svg-icons';
import DashLayout from '../../../components/dashLayout/dashLayout';
import './product.css';

const primaryColor = '#64c5b1';

function Product() {
    return (
        <main>
            <section className=''>
                <h6 className='mb-3'>Product</h6>
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
                            <th scope="col">Product Name</th>
                            <th scope="col">Sub-category</th>
                            <th scope="col">Price</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Avatar</th>
                            <th scope="col">Discount</th>
                            <th scope="col">Trending</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <button type='button' className='mx-2'><FontAwesomeIcon icon={faEye} color={primaryColor} /></button>
                                <button type='button' className='mx-2'><FontAwesomeIcon icon={faEdit} color={primaryColor} /></button>
                                <button type='button' className='mx-2'><FontAwesomeIcon icon={faTrash} color={primaryColor} /></button>
                            </td>
                            <td>Vanilla Cake</td>
                            <td>Cake</td>
                            <td>$ 2</td>
                            <td>-----</td>
                            <td>2%</td>
                            <td>false</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </main>
    )
}

export default Product;