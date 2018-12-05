import React from 'react';

import './Footer.css';

const footer = () => {
    return (
        <footer className="footer">
            &copy; { new Date().getFullYear() } Tigran
        </footer>
    )
};

export default footer;