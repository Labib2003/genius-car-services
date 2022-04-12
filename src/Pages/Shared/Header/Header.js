import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png'

const Header = () => {
    return (
        <header>
            <Navbar bg="primary" variant="dark">
                <Container className='d-flex justify-content-between'>
                    <Navbar.Brand href="#home">
                        <img src={logo} style={{height: '30px'}} alt="" />
                    </Navbar.Brand>
                    <Nav>
                        <Nav.Link as={Link} to='/home'>Home</Nav.Link>
                        <Nav.Link as={Link} to='/about'>About</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;