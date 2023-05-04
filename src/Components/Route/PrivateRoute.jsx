import React, { useContext } from 'react';
import { AuthContext } from '../Authentication/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

    const location = useLocation()

    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return <div className='min-h-screen flex flex-col items-center justify-center absolute top-0 left-0 right-0 bottom-0 z-20 backdrop-blur-lg bg-[#ffffffe4]'> <span className='text-xl mb-2'>Loading ...</span> <progress className="progress  mx-auto  w-1/3">  </progress> </div>
    }

    if (user) {
        return children
    }
    return (
        <Navigate to="/login" state={{ from: location }} replace></Navigate>
    );
};

export default PrivateRoute;