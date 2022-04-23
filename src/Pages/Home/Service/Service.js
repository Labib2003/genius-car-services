import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './Service.css'

const Service = ({ service }) => {
    const { _id, name, img, price, description } = service;
    const navigate = useNavigate();

    const navigateToServiceDetail = (_id) => {
        navigate(`/service/${_id}`)
    }

    return (
        <div className='service'>
            <img className='img-fluid' src={img} alt="" />
            <h2>{name}</h2>
            <p>${price}</p>
            <p>{description}</p>
            <Button onClick={() => navigateToServiceDetail(_id)}>Book {name}</Button>
        </div>
    );
};

export default Service;