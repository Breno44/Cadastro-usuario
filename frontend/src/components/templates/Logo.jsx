import './Logo.css';
import Logo from '../../assets/imgs/Group 2.png';
import React from 'react';

// eslint-disable-next-line import/no-anonymous-default-export
export default props =>
    <aside className="logo">
        <a href="/" className="logo">
            <img src={Logo} alt="logo" />
        </a>
    </aside>
