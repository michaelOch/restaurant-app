import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faSearch, faBell, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './dashHeader.css';

const primaryColor = '#64c5b1';

function DashHeader() {
    return (
        <section className='dash-header'>
            <div className='container-fluid'>
                <div className='d-flex justify-content-between align-items-center'>
                    <div className="input-group search-section">
                        <span className="input-group-text">
                            <FontAwesomeIcon icon={faSearch} color={primaryColor} />
                        </span>
                        <input type="text" className="form-control" placeholder="Search here..." />
                    </div>
                    <div className='d-flex justify-content-end align-items-center notification-section'>
                        <FontAwesomeIcon icon={faBell} /> &nbsp; &nbsp;
                        <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DashHeader;