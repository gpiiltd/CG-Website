import { createBrowserRouter, RouterProvider, type RouteObject } from 'react-router-dom';
import routeNames from './RouteNames';
import ServicesMain from '../../Pages/ServicesMain';
import FacesOfCG from '../../Pages/FacesOfCG/FacesOfCG';
import HomeMain from '../../Pages/Home/HomeMain';
import DiscoveryView from '../../Pages/DiscoverCG/DiscoveryView';
import ContactUs from '../../Pages/ContactUs';
import OurServicesTab from '../../Pages/OurServices/OurServicesTab';
import ServiceDetailPage from '../../Pages/OurServices/ServiceDetailPage';
import GovernanceAndPolicyMain from '../../Pages/GovernanceAndPolicyMain';
import MainLayout from '../../Pages/Home/MainLayout';
import Assets from '../../Pages/DiscoverCG/Assets';
import DiscoverCGMain from '../../Pages/DiscoverCG/DiscoverCGMain';

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
      {
        path: routeNames.discoveryCG, // /discover-century-group
        element: <DiscoverCGMain />,
        children: [
          {
            index: true, // This renders at /discover-century-group
            element: <DiscoveryView />,
          },
          {
            path: routeNames.assets, // This renders at /discover-century-group/assets
            element: <Assets />,
          },
        ],
      },

      { path: routeNames.contactUs, element: <ContactUs /> },
      { path: routeNames.ourTeam, element: <FacesOfCG /> },
      {
        path: routeNames.governanceLicencesAndCertifications,
        element: <GovernanceAndPolicyMain />,
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
