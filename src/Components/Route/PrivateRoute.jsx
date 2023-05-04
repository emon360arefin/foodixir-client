import React, { useContext } from 'react';
import { AuthContext } from '../Authentication/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

    const location = useLocation()

    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return <progress className="progress w-52"></progress>
    }

    if (user) {
        return children
    }
    return (
        <Navigate to="/login" state={{ from: location }} replace></Navigate>
    );
};

export default PrivateRoute;