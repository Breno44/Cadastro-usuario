import './Logo.css';
import Logo from '../../assets/imgs/Group 2.png';
import React from 'react';
import { Link } from 'react-router-dom';


// eslint-disable-next-line import/no-anonymous-default-export
export default props =>
    <aside className="logo">
        <Link to="/" className="logo">
            <img src={Logo} alt="logo" />
        </Link>
    </aside>
