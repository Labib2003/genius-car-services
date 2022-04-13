import { updateProfile } from 'firebase/auth';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Login = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);

    const handleNameBlur = (event) => {
        setName(event.target.value);
    }
    const handleEmailBlur = (event) => {
        setEmail(event.target.value);
    };
    const handlePasswordBlur = (event) => {
        setPassword(event.target.value);
    };
    const handleFormSubmit = (event) => {
        event.preventDefault();
        createUserWithEmailAndPassword(email, password)
            .then(updateProfile(auth.currentUser, {
                displayName: 'ahl'
            }))
    }

    return (
        <Form onSubmit={handleFormSubmit} className='container mt-5'>
            <h2 className='text-primary'>Register</h2>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Your name</Form.Label>
                <Form.Control onBlur={handleNameBlur} type="text" placeholder="Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
};

export default Login;