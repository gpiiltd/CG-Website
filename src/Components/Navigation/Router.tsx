import { createBrowserRouter, RouterProvider, type RouteObject } from 'react-router-dom';
import MainLayout from '../../Pages/MainLayout';
import routeNames from './RouteNames';
import ServicesMain from '../../Pages/ServicesMain';
import FacesOfCG from '../../Pages/FacesOfCG/FacesOfCG';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
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
