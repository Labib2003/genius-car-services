import React from 'react';
import useServices from '../../hooks/useServices/useServices';

const ManageServices = () => {
    const [services, setService] = useServices();

    const handleDelete = (id) => {
        const confirm = window.confirm("Are you sure?");
        if(confirm){
            const url = `http://localhost:5000/services/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = services.filter(service => service._id !== id);
                setService(remaining);
            });
            console.log("delete");
        }
    }

    return (
        <div>
            <h1>Manage servies</h1>
            {
                services.map(service => <div key={service._id}>
                    <h3>{service.name} <button onClick={() => handleDelete(service._id)}>X</button></h3>
                </div>)
            }
        </div>
    );
};

export default ManageServices;