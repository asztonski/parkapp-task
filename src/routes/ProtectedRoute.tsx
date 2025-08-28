import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { isAuthed } from '../auth/auth';

export default function ProtectedRoute() {
  const location = useLocation();
  const authed = isAuthed();
  return authed ? <Outlet /> : <Navigate to="/login" replace state={{ from: location }} />;
}
