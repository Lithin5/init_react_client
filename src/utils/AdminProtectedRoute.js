import React from 'react'
import { useSelector } from "react-redux"
import { Navigate, useLocation } from "react-router-dom"

const AdminProtectedRoute = ({ children }) => {
    // const user = useSelector((state) => state.user);
    let location = useLocation();

    if (!true) {
        return <Navigate to="/login" state={{ from: location }} replace />
    }
    return children

};

export default AdminProtectedRoute;