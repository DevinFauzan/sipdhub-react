// ProtectedRoute.tsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Adjust the import path as necessary

interface ProtectedRouteProps {
    element: React.ReactNode; // The component to render if authenticated
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {
    const { isAuthenticated } = useAuth(); // Get the authentication state from context

    return isAuthenticated ? <>{element}</> : <Navigate to="/sipd-hub" replace />; // Redirect to login if not authenticated
};

export default ProtectedRoute;
