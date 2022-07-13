import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Car from '../Car/Car';
import './Home.css'

const Home = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch('https://caros.free.beeceptor.com/')
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])
    return (
        <div className='home-container'>
            <div className="car-container">
                {
                    cars.map(car => <Car
                        key={car.id}
                        car={car}>

                    </Car>)
                }
            </div>

            <div className="cart-container">
                <h3>Car added</h3>

            </div>


        </div>
    );
};

export default Home;