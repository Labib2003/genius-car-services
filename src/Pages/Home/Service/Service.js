import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './Service.css'

const Service = ({ service }) => {
    const { id, name, img, price, description } = service;
    const navigate = useNavigate();

    const navigateToServiceDetail = (id) => {
        navigate(`/service/${id}`)
    }

    return (
        <div className='service'>
            <img className='img-fluid' src={img} alt="" />
            <h2>{name}</h2>
            <p>${price}</p>
            <p>{description}</p>
            <Button onClick={() => navigateToServiceDetail(id)}>Book {name}</Button>
        </div>
    );
};

export default Service;