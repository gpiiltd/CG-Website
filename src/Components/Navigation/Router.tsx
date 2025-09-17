import { createBrowserRouter, RouterProvider, type RouteObject } from 'react-router-dom';
import MainLayout from '../../Pages/MainLayout';
import routeNames from './RouteNames';
import ServicesMain from '../../Pages/ServicesMain';
import FacesOfCG from '../../Pages/FacesOfCG/FacesOfCG';
import HomeMain from '../../Pages/Home/HomeMain';
import DiscoveryView from '../../Pages/DiscoveryView';
import ContactUs from '../../Pages/ContactUs';
import OurServicesTab from '../../Pages/OurServices/OurServicesTab';
import ServiceDetailPage from '../../Pages/OurServices/ServiceDetailPage';

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
            element: <OurServicesTab />,
          },
          {
            path: routeNames.servicesDetail,
            element: <ServiceDetailPage />,
          },
        ],
      },
      { path: routeNames.discoveryCG, element: <DiscoveryView /> },

      { path: routeNames.contactUs, element: <ContactUs /> },
      { path: routeNames.ourTeam, element: <FacesOfCG /> },
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
