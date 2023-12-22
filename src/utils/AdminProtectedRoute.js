import React from 'react'
import { useSelector } from "react-redux"
import { Navigate, useLocation } from "react-router-dom"
import { selectCurrentUser } from '../redux/selectors/authenticationSelectors';

const AdminProtectedRoute = ({ children }) => {    
    let location = useLocation();
    const currentUser = useSelector(selectCurrentUser);     

    if (!currentUser || currentUser.role !== "admin") {
        return <Navigate to="/login" state={{ from: location }} replace />
    }
    return children

};

export default AdminProtectedRoute;