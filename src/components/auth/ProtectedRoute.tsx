
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { isAuthenticated, isErpConnected } from '@/utils/auth';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireAuth?: boolean;
  requireErp?: boolean;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ 
  children, 
  requireAuth = true,
  requireErp = true
}) => {
  const location = useLocation();
  const isUserAuthenticated = isAuthenticated();
  const isErpConnectionActive = isErpConnected();

  // Check if user is authenticated
  if (requireAuth && !isUserAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Check if ERP is connected (only if user is authenticated)
  if (requireErp && isUserAuthenticated && !isErpConnectionActive) {
    return <Navigate to="/erp-connect" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
