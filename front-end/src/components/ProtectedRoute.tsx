import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ReactNode } from "react";

import RootState from "../type/rootstate";

interface ProtectedRouteProps {
    children: ReactNode
}

const user = useSelector((state : RootState) => state.user)

const ProtectedRoute = ({ children } : ProtectedRouteProps) => {
    return user.isLoggedIn ? children : <Navigate to='/login' />
}

export default ProtectedRoute