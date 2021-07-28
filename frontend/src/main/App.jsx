import React from 'react';
import './App.css';

import Logo from '../components/templates/Logo';
import Footer from '../components/templates/Footer';
import Main from '../components/templates/Main';
import Nav from '../components/templates/Nav';

// eslint-disable-next-line import/no-anonymous-default-export
export default props => 
    <div className="app">
        <Logo />
        <Nav />
        <Main />
        <Footer />
    </div>