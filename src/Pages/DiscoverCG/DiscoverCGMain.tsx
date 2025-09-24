import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom';

const DiscoverCGMain = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className=" flex flex-col w-full bg-white">
      <main className="flex-grow">
        <Outlet />
      </main>
    </div>
  );
}

export default DiscoverCGMain

