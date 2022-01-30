import React from 'react';

import { Route, Redirect, Switch } from 'react-router-dom';
import { AppBar } from '../components/AppBar';

export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {
    return (
        <Route 
            { ...rest }
            component={(props) => (
                ( isAuthenticated )
                    ? ( <> 
                            <Component { ...props } />
                        </> )
                    : ( <Redirect to="/auth/login" /> )
            )} 
        />
    )
}
