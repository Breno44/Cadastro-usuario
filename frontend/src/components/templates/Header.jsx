import './Header.css';
import React from 'react';

// eslint-disable-next-line import/no-anonymous-default-export
export default props =>
    <aside className="header d-none d-sm-flex flex-column">
        <h1 className='mt-3'>
            <i className={`fa fa-${props.icon}`}></i> {props.title}
        </h1>
        <p className="lead text-muted">{props.subtitle}</p>
    </aside> 