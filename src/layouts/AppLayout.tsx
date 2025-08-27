import { Outlet } from 'react-router-dom';

export default function AppLayout() {
  return (
    <div className="flex min-h-dvh flex-col">
      <header className="w-full shrink-0">header</header>
      <main className="m-auto flex flex-1 items-center">
        <div>
          <Outlet />
        </div>
      </main>
    </div>
  );
}
