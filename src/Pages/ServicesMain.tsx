import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

const ServicesMain = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default ServicesMain;
