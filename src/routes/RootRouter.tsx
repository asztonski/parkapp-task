import { Routes, Route, Navigate, useLocation, matchPath } from 'react-router-dom';
import { useMemo } from 'react';
import AppLayout from '../layouts/AppLayout';
import Login from '../pages/Login';
import Pilot from '../pages/Pilot';
import NotFound from '../pages/NotFound';
import ProtectedRoute from './ProtectedRoute';
import Header from '../components/ui/Header';
import GoBackButton from '../components/ui/button/GoBackButton';

export default function RootRouter() {
  const location = useLocation();

  const { title, showBack } = useMemo(() => {
    const path = location.pathname;

    const isPilot = !!matchPath({ path: '/pilot', end: true }, path);
    const isLogin = !!matchPath({ path: '/login', end: true }, path);
    const isRoot = path === '/';

    const isKnown = isPilot || isLogin || isRoot;

    const title = isPilot
      ? 'Otwórz bramę'
      : isLogin || isRoot
        ? 'Zaloguj się'
        : 'Przykro nam, strona nie została znaleziona :(';

    const showBack = isPilot || !isKnown; // pokaż tylko na /pilot oraz 404

    return { title, showBack };
  }, [location.pathname]);

  return (
    <div className="m-auto flex min-h-dvh max-w-2xl flex-col">
      <Header>
        {showBack && <GoBackButton className="top-14 left-4" />}
        <h1 className="w-min">{title}</h1>
      </Header>

      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/pilot" element={<Pilot />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}
