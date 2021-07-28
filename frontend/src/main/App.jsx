import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import React from 'react';
import './App.css';

import Logo from '../components/templates/Logo';
import Footer from '../components/templates/Footer';
import Home from '../components/home/home';
import Nav from '../components/templates/Nav';

// eslint-disable-next-line import/no-anonymous-default-export
export default props => 
    <div className="app">
        <Logo />
        <Nav />
        <Home />
        <Footer />
    </div>
