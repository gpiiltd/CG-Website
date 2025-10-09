/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ServiceSection from './ServiceSection';
import { Typography } from '../../Components/Typography';
import { HoverCard } from '../../Components/HoverCard';
import StatsBar from './StatsBar';
import OurProjects from '../Home/OurProjects';
import usePageTitle from '../../Components/PageTitle';
import AnimatedScreen from '../../Components/Animations';
import { client } from '../../sanityClient';

const queryServiceDetails = `*[_type == "serviceDetails"]{
  id,
  title,
  subtitle,
  companyTitle,
  companyDescription,
  bgColor,
  "image": image[].asset->url
}`;
const ServiceDetailPage = () => {
  usePageTitle('Century Group | Service Details');
  const [serviceDetails, setServiceDetails] = useState<any[]>([]);
  const { id } = useParams<{ id: string }>();
  const serviceId = Number(id);

  useEffect(() => {
    const fetchServiceDetails = async () => {
      try {
        const fetchedServiceDetails = await client.fetch(queryServiceDetails);
        const sortedServiceDetails = fetchedServiceDetails.sort(
          (a: { id: number }, b: { id: number }) => a.id - b.id
        );

        setServiceDetails(sortedServiceDetails);
      } catch (error) {
        console.error('Error fetching service details:', error);
      }
    };
    fetchServiceDetails();
  }, []);


  const service = serviceDetails.find((s) => s.id === serviceId);

  if (!service) {
    return <div>Service not found.</div>;
  }

  // Filter out the current service
  const otherServices = serviceDetails.filter((s) => s.id !== serviceId);

  // Create serviceImages from fetched data with fallbacks
  const serviceImages: Record<number, string> = serviceDetails.reduce(
    (acc, service) => {
      acc[service.id] = service.image?.[0] || service.image || '';
      return acc;
    },
    {} as Record<number, string>
  );

  return (
    <>
      <AnimatedScreen>
        <ServiceSection {...service} />

        <div className="py-12 w-full">
          <div className="flex flex-col justify-center items-center px-3 lg:w-[650px] mx-auto py-8">
            <Typography size="3xl" weight="bold" className="mb-6 text-center text-black">
              Our Other Services
            </Typography>
            <Typography size="lg" weight="normal" className="w-full text-center text-[#3E3E41]">
              We fuel your offshore energy ambition by seamlessly integrating world class floater
              (FPSO, FSO, etc) deploying unmatched efficiency, reduced risked and accelerated
              project delivery. Partner with us to navigate complexity with confidence, leveraging
              unified expertise that drive cost-efficient and effective goal attainment in the
              energy sector.
            </Typography>
          </div>
          <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-[90%] mx-auto">
            {otherServices.map((other) => (
              <HoverCard
                key={other.id}
                title={other.title}
                // description={other.subtitle}
                imageSrc={serviceImages[other.id]}
                className="h-80 lg:col-span-1"
                linkTo={`/services/${other.id}`}
              />
            ))}
          </div>
        </div>

        <OurProjects />

        <StatsBar />
      </AnimatedScreen>
    </>
  );
};

export default ServiceDetailPage;
