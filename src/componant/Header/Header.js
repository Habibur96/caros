import React from 'react';

import { Link } from 'react-router-dom';

import './Header.css'

const Header = () => {

    return (
        <div >
            <h2>Welcome to our car shop.</h2>
            <div className='navber'>
                <Link to='/'>Home</Link>

                <Link to='/product'>Product</Link>
                <Link to='/contact'>Contact</Link>

            </div>



        </div>
    );
};

export default Header;