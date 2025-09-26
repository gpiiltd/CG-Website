import { useParams } from 'react-router-dom';
import ServiceSection from './ServiceSection';
import { serviceSectionsData } from './servicesDatalist';
import { Typography } from '../../Components/Typography';
import { HoverCard } from '../../Components/HoverCard';
import StatsBar from './StatsBar';
import OurProjects from '../Home/OurProjects';
import usePageTitle from '../../Components/PageTitle';
import atalaEP from '../../assets/Atala-E&P.png';
import tnFPSO from '../../assets/TN FPSO- Deployment - O&M.jpg';
import LNGVessel from '../../assets/LNG Vessel.jpg';
import CPTLOps from '../../assets/CPTL Ops.jpeg';
import AnimatedScreen from '../../Components/Animations';

const ServiceDetailPage = () => {
  usePageTitle('Century Group | Service Details');
  const { id } = useParams<{ id: string }>();
  const serviceId = Number(id);
  const service = serviceSectionsData.find((s) => s.id === serviceId);

  if (!service) {
    return <div>Service not found.</div>;
  }

  // Filter out the current service
  const otherServices = serviceSectionsData.filter((s) => s.id !== serviceId);

  // Service images
  const serviceImages: Record<number, string> = {
    1: atalaEP,
    2: tnFPSO,
    3: CPTLOps,
    4: LNGVessel,
  };

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
