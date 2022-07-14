import React from 'react';
import { Link } from 'react-router-dom';
import './Car.css'

const Car = ({ car }) => {
    const { name, price, img } = car;
    return (
        <div className='car'>
            <img src={img} alt="" />
            <h3>Name: {name}</h3>
            <h3>Price: {price}</h3>
            <Link to={`/car/${img}`}>Click Here</Link>
        </div>
    );
};

export default Car;

