import { createBrowserRouter, RouterProvider, type RouteObject } from 'react-router-dom';
import MainLayout from '../../Pages/MainLayout';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <MainLayout />,
    children: [],
  },
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
