import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { startLogout } from '../actions/auth';
import { todoLogout } from '../actions/todos';
import { Button } from 'react-bootstrap';

export const AppBar = () => {

  const dispatch = useDispatch();

  const hanleLogout = () => {
    dispatch(startLogout());
    dispatch(todoLogout());
  }

  return (
    <div className='app-bar'>
      <FontAwesomeIcon icon={ faBars } />
      <div id="actions" className="items-group push-right">
        
        <NavLink
              to="/home"
              activeClassName='active'
              className="nav-item nav-link"
        >
          Home
        </NavLink>
        <NavLink
            to="/about"
            activeClassName='active'
            className="nav-item nav-link"
        >
          About
        </NavLink>  
        
        <Button onClick={ hanleLogout }>
          Logout
        </Button>
      </div>
    </div>
  );
};