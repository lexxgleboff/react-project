import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <div>
            <Link to={'/'}>Главая</Link>
            <Link to={'/about'}>О сайте</Link>
        </div>
    );
};

