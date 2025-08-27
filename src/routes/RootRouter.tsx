import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/Login';
import Pilot from '../pages/Pilot';
import NotFound from '../pages/NotFound';
import ProtectedRoute from './ProtectedRoute';

export default function RootRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/pilot" element={<Pilot />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
