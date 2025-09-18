import { useParams } from 'react-router-dom';
import ServiceSection from './ServiceSection';
import { serviceSectionsData } from './servicesDatalist';
import { Typography } from '../../Components/Typography';
import { HoverCard } from '../../Components/HoverCard';
import womanworker from '../../assets/svgImages/womanworker.svg';
import gasplant from '../../assets/svgImages/gasplant.svg';
import manworker from '../../assets/svgImages/manworker.svg';
// import CarouselSection from './CarouselSection';
import StatsBar from './StatsBar';
import OurProducts from '../Home/OurProducts';

const ServiceDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const service = serviceSectionsData.find((s) => s.id === Number(id));

  if (!service) {
    return <div>Service not found.</div>;
  }

  return (
    <>
      <ServiceSection {...service} />

      {/* Other services Section */}
      <div className="py-12 w-full">
        <div className="flex flex-col justify-center items-center px-3 lg:w-[650px] mx-auto py-8">
          <Typography size="3xl" weight="bold" className="mb-6 text-center text-black">
            Our Other Services
          </Typography>
          <Typography size="lg" weight="normal" className="w-full text-center text-[#3E3E41]">
            We fuel your offshore energy ambition by seamlessly integrating world class floater
            (FPSO, FSO, etc) deploying unmatched efficiency, reduced risked and accelerated project
            delivery. Partner with us to navigate complexity with confidence, leveraging unified
            expertise that drive cost-efficient and effective goal attainment in the energy sector.
          </Typography>
        </div>
        <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-[90%] mx-auto">
          <HoverCard
            title="Ports Terminal & Management Services"
            description=""
            imageSrc={manworker}
            className="h-80 lg:col-span-1"
          />
          <HoverCard
            title="Deployment, Operation & maintenance of Offshore infrastructure"
            description=""
            imageSrc={womanworker}
            className="h-80 lg:col-span-1"
          />
          <HoverCard
            title="Natural Gas Transmission & Distribution"
            description=""
            imageSrc={gasplant}
            className="h-80 lg:col-span-1"
          />
        </div>
      </div>

      {/* Carousel Section */}
      {/* <CarouselSection data={carouselData} /> */}

      <OurProducts />

      {/* Stats Section */}
      <StatsBar />
    </>
  );
};

export default ServiceDetailPage;
