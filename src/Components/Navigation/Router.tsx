import { createBrowserRouter, RouterProvider, type RouteObject } from 'react-router-dom';
import MainLayout from '../../Pages/MainLayout';
import routeNames from './RouteNames';
import ServicesMain from '../../Pages/ServicesMain';
import FacesOfCG from '../../Pages/FacesOfCG/FacesOfCG';
import HomeMain from '../../Pages/Home/HomeMain';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <HomeMain /> },

      {
        path: routeNames.services,
        element: <ServicesMain />,
        children: [
          {
            index: true,
            element: <FacesOfCG />,
          },
        ],
      },
    ],
  },
  // ...
  {
    path: '*',
    element: <>Page not found</>,
  },
];

const router = createBrowserRouter(routes);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
