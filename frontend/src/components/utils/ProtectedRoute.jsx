import { useAuth } from '@clerk/react';
import { Navigate } from 'react-router';
import LoadingState from './LoadingState';

function ProtectedRoute({ children }) {
  const { isLoaded, isSignedIn } = useAuth();

  if (!isLoaded) {
    return <LoadingState message="Tekshirilmoqda..." />;
  }

  if (!isSignedIn) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRoute;