import React from 'react';
import { Button } from 'react-bootstrap';
import './Service.css'

const Service = ({service}) => {
    const {name, img, price, description}= service;
    return (
        <div className='service'>
            <img className='img-fluid' src={img} alt="" />
            <h2>{name}</h2>
            <p>${price}</p>
            <p>{description}</p>
            <Button>Book {name}</Button>
        </div>
    );
};

export default Service;