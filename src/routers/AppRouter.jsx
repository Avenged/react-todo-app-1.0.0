import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { 
    BrowserRouter as Router,
    Redirect,
    Switch,
} from "react-router-dom";
import { firebase } from '../firebase/firebase-config';

import { PublicRoute } from './PublicRoute';
import { login } from '../actions/auth';
import { AuthRouter } from './AuthRouter';
import { HomeScreen } from '../components/home/HomeScreen';
import { PrivateRoute } from './PrivateRoute';
import { AboutScreen } from '../components/home/AboutScreen';
import { startLoadingTodos } from '../actions/todos';
import Swal from 'sweetalert2';

export const AppRouter = () => {

    const dispatch = useDispatch();

    const [ checking, setChecking ] = useState(true);
    const [ isLoggedIn, setIsLoggedIn ] = useState(false);

    useEffect(() => {       
        try {
            firebase.auth().onAuthStateChanged((user) => {
           
                if ( user?.uid ) {
                    dispatch(login(user.uid, user.displayName));
                    setIsLoggedIn(true);
                    dispatch(startLoadingTodos(user.uid));
                } else {
                    setIsLoggedIn(false);
                }
     
                setChecking(false);
            });
        } catch (error) {
            Swal.fire('Error', error.message, 'error');
        }
    }, [ dispatch, setChecking, setIsLoggedIn ])

    if (checking) {
        return (
            <h1>Espere...</h1>
        )
    }

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute 
                        path="/auth"
                        component={ AuthRouter }
                        isAuthenticated={ isLoggedIn }
                    />
                    <PrivateRoute 
                        exact
                        isAuthenticated={ isLoggedIn }
                        path="/home"
                        component={ HomeScreen }
                    />
                    <PrivateRoute 
                        exact
                        isAuthenticated={ isLoggedIn }
                        path="/about"
                        component={ AboutScreen }
                    />
                    <Redirect to="/auth/login" />
                </Switch>
            </div>                
        </Router>
    );
};
