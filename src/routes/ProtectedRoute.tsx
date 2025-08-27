import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { isAuthed } from '../auth/auth';

export default function ProtectedRoute() {
  const location = useLocation();
  if (isAuthed()) return <Outlet />;
  return <Navigate to="/login" replace state={{ from: location }} />;
}
