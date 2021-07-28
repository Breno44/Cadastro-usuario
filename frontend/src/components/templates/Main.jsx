import './Main.css';
import React from 'react';
import Header from './Header';

// eslint-disable-next-line import/no-anonymous-default-export
export default props =>
    <React.Fragment>
        <Header {...props} />
        <main className="content">
            conteudo
        </main>
    </React.Fragment>