import React, { useContext, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import Spinner from 'react-bootstrap/Spinner';

const PrivetRouter = ({ children }) => {
    const { user, loader } = useContext(AuthContext)
    const location = useLocation()


    if (loader) {
        return <div className=' gap-4'> <Spinner animation="border" variant="primary" />

            <Spinner animation="border" variant="dark" />
            <Spinner animation="grow" variant="primary" />
            <Spinner animation="grow" variant="secondary" />
            <Spinner animation="grow" variant="success" />
            <Spinner animation="grow" variant="danger" />
            <Spinner animation="grow" variant="warning" />
            <Spinner animation="grow" variant="info" />
            <Spinner animation="grow" variant="light" />
            <Spinner animation="grow" variant="dark" /></div>
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }


    return children;



};

export default PrivetRouter;