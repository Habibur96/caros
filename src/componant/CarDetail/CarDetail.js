import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const CarDetail = () => {
    const params = useParams();

    const [cars, setCars] = useState({});
    useEffect(() => {
        const url = `https://carshop.free.beeceptor.com/${params.img}`;
        // console.log(url)?
        fetch(url)
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])
    return (
        <div>
            <h2>Car Details here</h2>
            <h2>img: {params.img}</h2>
            <img src={params.img} alt="" />
        </div>
    );
};

export default CarDetail;