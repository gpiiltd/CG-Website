import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../Components/Header';

const MainLayout = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="min-h-screen flex flex-col w-full bg-white">
      <Header />
      <main className="flex-grow">
          <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
