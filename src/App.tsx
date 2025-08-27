import { Navigate, Outlet, useLocation } from 'react-router-dom';

const AUTH_KEY = 'parkapp_logged_in';

function isLoggedIn() {
  if (typeof window === 'undefined') return false;
  return sessionStorage.getItem(AUTH_KEY) === '1' || localStorage.getItem(AUTH_KEY) === '1';
}

export default function App() {
  const { pathname } = useLocation();
  const authed = isLoggedIn();

  if (pathname === '/login') {
    return authed ? <Navigate to="/pilot" replace /> : <Outlet />;
  }

  if (pathname === '/pilot') {
    return authed ? <Outlet /> : <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
