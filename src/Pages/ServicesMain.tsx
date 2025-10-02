import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import AnimatedScreen from '../Components/Animations';

const ServicesMain = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div>
<AnimatedScreen>

      <Outlet />
</AnimatedScreen>

    </div>
  );
};

export default ServicesMain;
