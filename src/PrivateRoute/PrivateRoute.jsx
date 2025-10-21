import React, { use } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../Page/AuthProvider/AuthContext';

const PrivateRoute = ({children}) => {
    const {user, loading} = use(AuthContext);

    const location = useLocation();
    console.log(location);

    if(loading){
        return <span className='loading loading-spinner text-success'></span>
    };
    if(user){
        return children;
    }
    
    
    return <Navigate state={{from: location}} replace to='/login'></Navigate>;
};

export default PrivateRoute;