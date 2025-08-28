import { Outlet } from 'react-router-dom';

export default function AppLayout() {
  return (
    <main className="w-full flex-1 px-10 py-8">
      <Outlet />
    </main>
  );
}
