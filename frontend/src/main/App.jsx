import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import React from 'react';
import { HashRouter } from 'react-router-dom';

import Routes from './Routes'
import Logo from '../components/templates/Logo';
import Footer from '../components/templates/Footer';
import Nav from '../components/templates/Nav';

// eslint-disable-next-line import/no-anonymous-default-export
export default props => 
    <HashRouter>
        <div className="app">
            <Logo />
            <Nav />
            <Routes />
            <Footer />
        </div>
    </HashRouter>
