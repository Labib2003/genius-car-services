import React from 'react';

const Footer = () => {
    const date = new Date().getFullYear();
    return (
        <footer>
            <p><small>&copy; {date}</small></p>
        </footer>
    );
};

export default Footer;