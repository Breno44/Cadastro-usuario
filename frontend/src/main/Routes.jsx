import React from 'react';
import { Switch, Route, Redirect } from 'react-router';

import Home from '../components/home/home';
import UserCrud from '../components/User/UserCrud';

// eslint-disable-next-line import/no-anonymous-default-export
export default props => 
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/Usuarios' component={UserCrud} /> 
        <Redirect from='*' to='/' />
    </Switch>