import React from 'react';
import { Link, Navigate, NavLink } from 'react-router';

const Header = () => {
    return (
        <div>
            <h2>hi i am header</h2>
          <NavLink to='/'></NavLink>
            
            <NavLink to='/register'>Register</NavLink>
        </div>
    );
};

export default Header;