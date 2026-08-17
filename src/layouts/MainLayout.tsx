import { Outlet } from 'react-router-dom';

import Sidebar from '../components/layout/Sidebar';

export default function MainLayout() {
  return (
    <div>
      <Sidebar />

      <main className='min-h-screen pt-16 md:ml-64 md:pt-0'>
        <Outlet />
      </main>
    </div>
  );
}
