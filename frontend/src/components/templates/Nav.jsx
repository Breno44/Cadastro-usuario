import './Nav.css';
import React from 'react';

// eslint-disable-next-line import/no-anonymous-default-export
export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <a href="#/Inicio">
                <i className="fa fa-home"></i> Inicio
            </a>
            
            <a href="#/Usuarios">
                <i className="fa fa-users"></i> Usuarios
            </a>
            
        </nav>
    </aside> 